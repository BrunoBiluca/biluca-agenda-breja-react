import { Schedule } from "../schedule/Schedule";
import { Breweries } from "../breweries/breweries";
import { Outlet } from "react-router";
import { SignOutIcon } from "@phosphor-icons/react";

export function MainPage() {
  return (
    <>
      <header className="flex justify-between">
        <h1>
          Bora beber, <span className="text-orange-base">Usuário</span>?
        </h1>
        <button
          className="bg-gray-200 py-2 px-3 rounded-lg flex items-center
         gap-2 border-gray-500 border hover:bg-gray-100 hover:cursor-pointer
          transition"
        >
          <SignOutIcon />
          Sair
        </button>
      </header>
      <section className="mt-4 mb-2" id="schedule">
        <Schedule />
      </section>
      <section id="breweries">
        <Breweries />
      </section>
      <Outlet />
    </>
  );
}
