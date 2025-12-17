import { Schedule } from "../schedule/Schedule";
import { Breweries } from "../breweries/breweries";
import { Outlet } from "react-router";
import { SignOutIcon } from "@phosphor-icons/react";

export function MainPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <header className="flex justify-between">
        <h1>
          Bora beber, <span className="text-orange-base">Usuário</span>?
        </h1>
        <button className="flex items-center gap-2 rounded-lg border border-gray-500 bg-gray-200 px-3 py-2 transition hover:cursor-pointer hover:bg-gray-100">
          <SignOutIcon />
          Sair
        </button>
      </header>
      <section id="schedule" className="my-4">
        <Schedule />
      </section>
      <section id="breweries" className="my-4">
        <Breweries />
      </section>
      <Outlet />
    </div>
  );
}
