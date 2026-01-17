import { ScheduleVisitForm } from "@app/schedule/form/schedule-visit-form";
import { MapPinIcon, XCircleIcon } from "@phosphor-icons/react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { Modal } from "@ui/modal";
import { useState } from "react";
import { useNavigate } from "react-router";

export const BreweryDetail = () => {
  const navigate = useNavigate();

  const [modalContent, setModalContent] = useState<
    "brewery-detail" | "schedule-visit-form"
  >("brewery-detail");

  return (
    <Modal className="rounded-2xl border border-gray-200">
      <Card role="listitem">
        {modalContent === "brewery-detail" && (
          <>
            <div className="relative">
              <button
                onClick={() => navigate(-1)}
                className="absolute top-2 right-2 hover:cursor-pointer"
              >
                <XCircleIcon size={30} />
              </button>
              <img src="https://placehold.co/600x200" alt="" />
            </div>
            <CardHeader className="p-6">
              <CardTitle>
                <h2>Cervejaria do Alemão</h2>
              </CardTitle>
              <CardDescription className="flex flex-col gap-3 text-base text-gray-500">
                <p>
                  A Cervejaria do Alemão é conhecida por suas cervejas
                  artesanais premiadas e um ambiente acolhedor que remete às
                  tradicionais tavernas alemãs.
                </p>
                <p className="flex items-center gap-2">
                  <MapPinIcon /> Rua da Cevada, 123 - Vila Lúpulo, Cervejópolis
                  - SP.
                </p>
              </CardDescription>
            </CardHeader>

            <hr className="my-4 border-gray-200" />
            <CardFooter className="flex items-center justify-between p-6">
              <button
                onClick={() => setModalContent("schedule-visit-form")}
                className="border-orange-base bg-orange-base hover:bg-orange-light flex items-center gap-2 rounded-lg border px-3 py-2 transition hover:cursor-pointer"
              >
                Agendar visita
              </button>
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 rounded-lg border border-gray-500 bg-gray-200 px-3 py-2 transition hover:cursor-pointer hover:bg-gray-100"
              >
                Fechar
              </button>
            </CardFooter>
          </>
        )}
        {modalContent === "schedule-visit-form" && (
          <ScheduleVisitForm setModalContent={setModalContent} />
        )}
      </Card>
    </Modal>
  );
};
