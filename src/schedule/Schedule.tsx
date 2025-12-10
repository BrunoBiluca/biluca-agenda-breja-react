import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { Trash } from "lucide-react";

export function Schedule() {
  return (
    <>
      <h2 className="mb-3">Visitas agendadas</h2>
      <div className="schedule-list flex flex-col gap-4">{ScheduleItem()}</div>
    </>
  );
}

function ScheduleItem() {
  return (
    <Card className="flex flex-row gap-4 p-4">
      <CardHeader className="flex flex-1 flex-col gap-4">
        <CardTitle className="flex items-center justify-start gap-3">
          <h4 className="text-xl font-bold">Cervejaria do Alemão</h4>
          <span className="bg-orange-light rounded-full px-4 py-2 text-sm font-normal">
            15/01/2025
          </span>
        </CardTitle>
        <CardDescription className="flex flex-col gap-2 text-base text-gray-500">
          <div className="people">Pessoa 1, Pessoa2, Pessoa 3</div>
          <div className="notes">Levar presente para o mestre da cerveja</div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <button className="cursor-pointer transition">
          <Trash
            className="text-red-base hover:text-red-base/80"
            aria-label="Cancelar visita"
          />
        </button>
      </CardFooter>
    </Card>
  );
}
