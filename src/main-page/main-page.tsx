import { Schedule } from "../schedule/Schedule";
import { Breweries } from "../breweries/breweries";
import { Outlet } from "react-router";

export function MainPage() {
  return (
    <>
      <header className="text-2xl">
        <h1 className="font-bold">
          Bora Beber <span className="text-orange-base">Usuário</span>?
        </h1>
      </header>
      <section id="schedule">
        <Schedule />
      </section>
      <section id="breweries">
        <Breweries />
      </section>
      <Outlet />
    </>
  );
}
