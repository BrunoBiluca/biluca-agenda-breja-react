import { XCircleIcon, XIcon } from "@phosphor-icons/react";
import { CardFooter, CardHeader, CardTitle } from "@ui/card";
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@ui/field";
import { Input } from "@ui/input";
import { Textarea } from "@ui/textarea";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useBreweryScheduleData } from "../../../core/brewery-schedule/brewery-schedule-context";
import { BreweryScheduleRequest } from "../../../core/brewery-schedule/models/brewery-schedule-request.model";
import { BreweriesDataContext } from "@core/breweries/breweries-data-context";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

interface ScheduleVisitFormV2Props {
  setModalContent: React.Dispatch<
    React.SetStateAction<"brewery-detail" | "schedule-visit-form">
  >;
  breweryName: string | undefined;
}

export function ScheduleVisitFormV2({
  setModalContent,
  breweryName,
}: ScheduleVisitFormV2Props) {
  const navigate = useNavigate();
  const params = useParams();
  const breweries = useContext(BreweriesDataContext);
  const schedules = useBreweryScheduleData();

  const [guests, setGuests] = useState(["Ana", "Beto", "Carla"]);

  const scheduleVisitFormSchema = z.object({
    visitDate: z.iso.date("Data inválida").min(1, "Data é obrigatória"),
    guests: z.array(z.string()).min(1, "Adicione pelo menos um convidado"),
    observations: z.string().optional(),
  });

  type ScheduleVisitFormSchema = z.infer<typeof scheduleVisitFormSchema>;

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ScheduleVisitFormSchema>({
    resolver: zodResolver(scheduleVisitFormSchema),
  });

  // Atualize manualmente o estado do formulário quando guests mudar:
  useEffect(() => {
    setValue("guests", guests);
  }, [guests, setValue]);

  async function createBrewerySchedule(data: ScheduleVisitFormSchema) {
    const [year, month, day] = data.visitDate.split("-").map(Number);
    const visitDate = new Date(year, month - 1, day, 12, 0, 0);
    const brewery = await breweries.get(params.breweryId!);
    const scheduleData = new BreweryScheduleRequest(
      brewery.id,
      brewery.name,
      visitDate,
      data.guests,
      data.observations || "",
    );

    try {
      await schedules.create(scheduleData);
    } catch (error) {
      toast.error("Erro ao agendar visita", { position: "top-center" });
      return;
    }

    navigate("/");
  }

  return (
    <>
      <div className="relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-2 right-2 hover:cursor-pointer"
        >
          <XCircleIcon size={30} />
        </button>
      </div>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(createBrewerySchedule)}
      >
        <CardHeader className="p-6">
          <CardTitle className="text-center">
            <h1>
              Agendar visita à{" "}
              <span className="text-orange-base">{breweryName}</span>
            </h1>
          </CardTitle>
          <hr className="my-2 border-gray-200" />

          <FieldGroup>
            <FieldLabel htmlFor="visit-date" className="mb-1">
              Data da visita
            </FieldLabel>
            <Input
              {...register("visitDate")}
              type="date"
              className="focus-visible:ring-[1px]"
            />
            {errors.visitDate && (
              <FieldError>{errors.visitDate.message}</FieldError>
            )}
          </FieldGroup>
          <FieldGroup>
            <FieldLabel htmlFor="guests" className="mb-1">
              Convidados
            </FieldLabel>
            <div className="flex min-h-10 flex-wrap gap-2 rounded-md border p-2">
              {guests.map((guest, index) => (
                <button
                  type="button"
                  onClick={() => {
                    const newGuests = [...guests];
                    newGuests.splice(index, 1);
                    setGuests(newGuests);
                  }}
                  key={index}
                  className="inline-flex cursor-pointer items-center rounded-md bg-gray-100 px-2 py-1 text-sm"
                >
                  {guest}
                  <span className="ml-2">
                    <XIcon size={12} color="red" />
                  </span>
                </button>
              ))}
              <input
                type="text"
                className="min-w-[100px] flex-1 bg-transparent outline-none"
                placeholder="Digite e pressione Enter"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const value = e.currentTarget.value.trim();
                    if (value) {
                      setGuests([...guests, value]);
                      e.currentTarget.value = "";
                    }
                  }
                }}
              />
            </div>
            <FieldDescription>
              Digite e pressione Enter para adicionar um convidado
            </FieldDescription>
            {errors.guests && <FieldError>{errors.guests.message}</FieldError>}
          </FieldGroup>
          <FieldGroup>
            <FieldLabel htmlFor="observations" className="mb-1">
              Observações
            </FieldLabel>
            <Textarea
              {...register("observations")}
              placeholder="Ex: alguma restrição alimentar, etc."
              rows={4}
              className="focus-visible:ring-[1px]"
            />
          </FieldGroup>
        </CardHeader>
        <CardFooter className="flex items-center justify-between px-6 pb-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="border-orange-base bg-orange-base hover:bg-orange-light flex items-center gap-2 rounded-lg border px-3 py-2 transition hover:cursor-pointer disabled:opacity-50"
          >
            Confirmar agendamento
          </button>
          <button
            type="button"
            onClick={() => setModalContent("brewery-detail")}
            className="flex items-center gap-2 rounded-lg border border-gray-500 bg-gray-200 px-3 py-2 transition hover:cursor-pointer hover:bg-gray-100"
          >
            Voltar
          </button>
        </CardFooter>
      </form>
    </>
  );
}
