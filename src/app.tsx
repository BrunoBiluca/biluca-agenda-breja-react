import { RouterProvider } from "react-router";
import { router } from "./routes";
import { DebugFeatures } from "./testing/debug/debug-features";
import { isStandalone } from "./testing/standalone-mode/standalone-mode";

function App() {
  return (
    <div>
      {isStandalone() && <DebugFeatures />}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
