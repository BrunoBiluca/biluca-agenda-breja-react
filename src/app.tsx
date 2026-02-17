import { RouterProvider } from "react-router";
import { router } from "./routes";
import { DebugFeatures } from "./testing/debug/debug-features";
import { isStandalone } from "./testing/standalone-mode/standalone-mode";
import { Toaster } from "@ui/sonner";
import { I18nProvider } from "./common/i18n/i18n-context";

function App() {
  return (
    <div>
      {isStandalone() && <DebugFeatures />}
      <Toaster />
      <I18nProvider>
        <RouterProvider router={router} />
      </I18nProvider>
    </div>
  );
}

export default App;
