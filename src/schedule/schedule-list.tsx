import { useEffect, useState } from "react";
import { useBreweryScheduleData } from "./services/brewery-schedule-context";
import type { BrewerySchedule } from "./services/brewery-schedule.model";
import { ScheduleItem } from "./schedule-item";

export function ScheduleList() {
  const agenda = useBreweryScheduleData();
  const [schedule, setSchedule] = useState<BrewerySchedule[]>([]);

  function updateList(newSchedule: BrewerySchedule) {
    setSchedule([...schedule, newSchedule]);
  }

  useEffect(() => {
    async function getAllSchedules() {
      const res = await agenda.getAll();
      setSchedule(res);
    }

    getAllSchedules();

    agenda.onNewSchedule.subscribe(updateList);
    return () => {
      agenda.onNewSchedule.unsubscribe(updateList);
    };
  }, []);

  return (
    <>
      <h2 className="mb-3">Visitas agendadas</h2>
      <div className="schedule-list flex flex-col gap-4">
        {schedule.map((item: BrewerySchedule) => (
          <ScheduleItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
