import { MapPinIcon, XCircleIcon } from "@phosphor-icons/react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { Modal } from "@ui/modal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useBreweriesData } from "../../core/breweries/breweries-data-context";
import type { Brewery } from "../../core/breweries/Brewery.model";
import { ScheduleVisitFormV2 } from "@app/app/schedule-list/form/schedule-visit-form-v2";

type ModalContentProps = "brewery-detail" | "schedule-visit-form";

export const BreweryDetail = () => {
  const [error, setError] = useState<Error | undefined>(undefined);
  if (error) throw error;

  const navigate = useNavigate();

  const [modalContent, setModalContent] =
    useState<ModalContentProps>("brewery-detail");

  const params = useParams();
  const data = useBreweriesData();
  const [brewery, setBrewery] = useState<Brewery | null>(null);

  useEffect(() => {
    const fetchBrewery = async () => {
      if (!params.breweryId) return;
      try {
        const breweryData = await data.get(params.breweryId);
        setBrewery(breweryData);
      } catch (error) {
        setError(error as Error);
      }
    };
    fetchBrewery();
  }, [params.breweryId, data]);

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
              <img
                src="https://placehold.co/600x200"
                className="rounded-t-lg"
                alt=""
              />
            </div>
            <CardHeader className="p-6">
              <CardTitle>
                <h2>{brewery?.name}</h2>
              </CardTitle>
              <CardDescription className="flex flex-col gap-3 text-base text-gray-500">
                <p>
                  {brewery?.name} - {brewery?.website_url}
                </p>
                <p className="flex items-center gap-2">
                  <MapPinIcon /> {brewery?.street}, {brewery?.city},{" "}
                  {brewery?.state_province}, {brewery?.postal_code} -{" "}
                  {brewery?.country}
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
          <ScheduleVisitFormV2
            setModalContent={setModalContent}
            breweryName={brewery?.name}
          />
        )}
      </Card>
    </Modal>
  );
};
