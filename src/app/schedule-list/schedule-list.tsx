import { useEffect, useState } from "react";
import { useBreweryScheduleData } from "../../core/brewery-schedule/brewery-schedule-context";
import type { BrewerySchedule } from "@core/brewery-schedule/models/brewery-schedule.model";
import { ScheduleItem } from "./schedule-item";
import { Spinner } from "@ui/spinner";

export function ScheduleList() {
  const agenda = useBreweryScheduleData();
  const [schedule, setSchedule] = useState<BrewerySchedule[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agenda.getAll().then((res: BrewerySchedule[]) => {
      setSchedule(res);
      setLoading(false);
    });

    agenda.onUpdateSchedules.subscribe(setSchedule);
    return () => {};
  }, []);

  return (
    <>
      <h2 className="mb-3">Visitas agendadas</h2>
      <div className="schedule-list flex flex-col gap-4">
        {loading && (
          <div className="flex h-[200px] flex-col items-center justify-center">
            <Spinner />
            <span className="mb-3 text-center text-sm text-gray-500">
              Carregando agendamento de visitas...
            </span>
          </div>
        )}
        {!loading && schedule.length === 0 && (
          <div className="flex h-[200px] flex-col items-center justify-center">
            <p className="mb-3 text-center text-sm text-gray-500 italic">
              Nenhuma visita agendada
            </p>
          </div>
        )}
        {!loading &&
          schedule.map((item: BrewerySchedule) => (
            <ScheduleItem key={item.id} item={item} />
          ))}
      </div>
    </>
  );
}
