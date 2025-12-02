import { RouterProvider } from "react-router";
import { router } from "./routes";

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
