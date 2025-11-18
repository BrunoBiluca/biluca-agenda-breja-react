import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";

export function Schedule() {
  return (
    <>
      <h2>Visitas agendadas</h2>
      <div className="schedule-list grid grid-cols-2">{ScheduleItem()}</div>
    </>
  );
}

function ScheduleItem() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h4>Cervejaria do Alemão</h4>
          <span>15/01/2025</span>
        </CardTitle>
        <CardDescription>
          <div className="people">Pessoa 1, Pessoa2, Pessoa 3</div>
          <div className="notes">Levar presente para o mestre da cerveja</div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <button>Cancelar</button>
      </CardFooter>
    </Card>
  );
}
