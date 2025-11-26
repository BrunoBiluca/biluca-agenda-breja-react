import { createBrowserRouter } from "react-router";
import { MainPage } from "./main-page/main-page";
import { BreweryDetail } from "./breweries/brewery-detail";

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
]);
