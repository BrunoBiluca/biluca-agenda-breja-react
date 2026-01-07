import { createBrowserRouter } from "react-router";
import { MainPage } from "./main-page/main-page";
import { BreweryDetail } from "./breweries/brewery-detail";
import { LandingPage } from "./auth/landing-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
    children: [
      {
        path: ":breweryId",
        Component: BreweryDetail,
      },
    ],
  },
  {
    path: "/login",
    Component: LandingPage,
  },
]);
