import { TrashIcon } from "@phosphor-icons/react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import type { BrewerySchedule } from "./models/brewery-schedule.model";
import { useBreweryScheduleData } from "./services/brewery-schedule-context";

export function ScheduleItem({ item }: { item: BrewerySchedule }) {
  const schedule = useBreweryScheduleData();

  return (
    <Card className="flex flex-row gap-4 p-4">
      <CardHeader className="flex flex-1 flex-col gap-4">
        <CardTitle className="flex items-center justify-start gap-3">
          <h4 className="text-xl font-bold">{item.breweryName}</h4>
          <span className="bg-orange-light rounded-full px-4 py-2 text-sm font-normal">
            {item.visitDate.toLocaleDateString("pt-BR")}
          </span>
        </CardTitle>
        <CardDescription className="flex flex-col gap-2 text-base text-gray-500">
          <div className="people">{item.party.join(", ")}</div>
          <div className="notes">{item.notes}</div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <button className="cursor-pointer transition" onClick={() => schedule.cancel(item)}>
          <TrashIcon
            size={24}
            className="text-red-base hover:text-red-base/80"
            aria-label="Cancelar visita"
          />
        </button>
      </CardFooter>
    </Card>
  );
}
