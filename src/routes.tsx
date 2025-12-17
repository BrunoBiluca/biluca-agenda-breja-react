import { createBrowserRouter } from "react-router";
import { MainPage } from "./main-page/main-page";
import { BreweryDetail } from "./breweries/brewery-detail";
import { Login } from "./auth/login";

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
    Component: Login,
  },
]);
