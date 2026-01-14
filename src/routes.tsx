import { createBrowserRouter } from "react-router";
import { MainPage } from "./main-page/main-page";
import { BreweryDetail } from "./breweries/brewery-detail";
import { LandingPage } from "./auth/landing-page";
import { ProtectedRoute } from "./auth/routes/protected-route";
import { RedirectLoggedUserRoute } from "./auth/routes/redirect-logged-user-route";

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
