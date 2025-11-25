import { RouterProvider } from "react-router";
import "./app.css";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
