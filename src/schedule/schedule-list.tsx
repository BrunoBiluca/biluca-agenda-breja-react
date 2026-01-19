import { useEffect, useState } from "react";
import { useBreweryScheduleData } from "./services/brewery-schedule-context";
import type { BrewerySchedule } from "./services/brewery-schedule.model";
import { ScheduleItem } from "./schedule-item";

export function ScheduleList() {
  const agenda = useBreweryScheduleData();
  const [schedule, setSchedule] = useState<BrewerySchedule[]>([]);

  function addToList(newSchedule: BrewerySchedule) {
    setSchedule([...schedule, newSchedule]);
  }

  function removeFromList(removedSchedule: BrewerySchedule) {
    console.log("remove", removedSchedule.id);
    setSchedule(schedule.filter((item) => item.id !== removedSchedule.id));
  }

  useEffect(() => {
    async function getAllSchedules() {
      const res = await agenda.getAll();
      setSchedule(res);
    }

    getAllSchedules();

    agenda.onNewSchedule.subscribe(addToList);
    agenda.onScheduleCanceled.subscribe(removeFromList);
    return () => {
      agenda.onNewSchedule.unsubscribe(addToList);
      agenda.onScheduleCanceled.unsubscribe(removeFromList);
    };
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
