import { ScheduleList } from "../schedule-list/schedule-list";
import { Breweries } from "../breweries/breweries";
import { Outlet, useNavigate } from "react-router";
import { SignOutIcon } from "@phosphor-icons/react";
import { useAuth } from "@app/auth/services/auth-context";

export function MainPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    auth.logout();
    navigate("/login");
  }

  return (
    <div className="mx-auto max-w-5xl py-4">
      <header className="flex justify-between">
        <h1>
          Bora beber,{" "}
          <span className="text-orange-base">{auth.getLoggedUser()!.name}</span>
          ?
        </h1>
        <button
          className="flex items-center gap-2 rounded-lg border border-gray-500 bg-gray-200 px-3 py-2 transition hover:cursor-pointer hover:bg-gray-100"
          onClick={handleLogout}
        >
          <SignOutIcon />
          Sair
        </button>
      </header>
      <section id="schedule" className="my-4">
        <ScheduleList />
      </section>
      <section id="breweries" className="my-4">
        <Breweries />
      </section>
      <Outlet />
    </div>
  );
}
