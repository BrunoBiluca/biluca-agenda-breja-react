import { Schedule } from "../schedule/Schedule";
import { Breweries } from "../breweries/Breweries";

export function MainPage() {
  return (
    <>
      <header>
        <h1>
          Bora Beber <span>Usuário</span>?
        </h1>
      </header>
      <section id="schedule">
        <Schedule />
      </section>
      <section id="breweries">
        <Breweries />
      </section>
    </>
  );
}
