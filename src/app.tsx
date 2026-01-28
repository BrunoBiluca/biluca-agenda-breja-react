import { RouterProvider } from "react-router";
import { router } from "./routes";
import { DebugFeatures } from "./debug/debug-features";

function App() {
  return (
    <div>
      <DebugFeatures />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
