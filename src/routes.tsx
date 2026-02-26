import { createBrowserRouter } from "react-router";
import { MainPage } from "./app/main-page/main-page";
import { BreweryDetail } from "./app/breweries/brewery-detail";
import { LandingPage } from "./auth/landing-page";
import { ProtectedRoute } from "./auth/routes/protected-route";
import { RedirectLoggedUserRoute } from "./auth/routes/redirect-logged-user-route";
import { BreweryNotFound } from "./app/breweries/brewery-not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ProtectedRoute,
    children: [
      {
        path: "",
        Component: MainPage,
        children: [
          {
            path: ":breweryId",
            errorElement: <BreweryNotFound />,
            Component: BreweryDetail,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    Component: RedirectLoggedUserRoute,
    children: [
      {
        path: "",
        Component: LandingPage,
      },
    ],
  },
]);
