import { RouterProvider } from "react-router";
import { router } from "./routes";
import { DebugFeatures } from "./testing/debug/debug-features";
import { isStandalone } from "./testing/standalone-mode/standalone-mode";
import { Toaster } from "@ui/sonner";
import { I18nProvider } from "./common/i18n/i18n-context";
import { AuthServiceProvider } from "./auth/services/auth-context";
import { appfac } from "./app-factory";
import { BreweriesDataProvider } from "@core/breweries/breweries-data-context";
import { BreweryScheduleDataProvider } from "@core/brewery-schedule/brewery-schedule-context";

function App() {
  return (
    <AuthServiceProvider authService={appfac.authService()}>
      <BreweriesDataProvider breweriesData={appfac.breweriesData()}>
        <BreweryScheduleDataProvider breweryScheduleData={appfac.breweriesScheduleData()}>
          <div>
            {isStandalone() && <DebugFeatures />}
            <Toaster />
            <I18nProvider>
              <RouterProvider router={router} />
            </I18nProvider>
          </div>
        </BreweryScheduleDataProvider>
      </BreweriesDataProvider>
    </AuthServiceProvider>
  );
}

export default App;
