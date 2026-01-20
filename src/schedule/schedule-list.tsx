import { useEffect, useState } from "react";
import { useBreweryScheduleData } from "./services/brewery-schedule-context";
import type { BrewerySchedule } from "./models/brewery-schedule.model";
import { ScheduleItem } from "./schedule-item";

export function ScheduleList() {
  const agenda = useBreweryScheduleData();
  const [schedule, setSchedule] = useState<BrewerySchedule[]>([]);

  useEffect(() => {
    agenda.getAll().then(setSchedule);

    agenda.onUpdateSchedules.subscribe(setSchedule);
    return () => {};
  }, []);

  return (
    <>
      <h2 className="mb-3">Visitas agendadas</h2>
      <div className="schedule-list flex flex-col gap-4">
        {schedule.length === 0 && (
          <p className="mb-3 text-center text-sm text-gray-500 italic">
            Nenhuma visita agendada
          </p>
        )}
        {schedule.map((item: BrewerySchedule) => (
          <ScheduleItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
