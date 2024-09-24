import { initDomToCode } from "dom-to-code";
import "./App.css";
import appRoutes from "./routes/appRoutes";
import generateRoutes from "./routes/generateRoutes";
import { useEffect } from "react";
import { ENV_MODE } from "@global";

function App() {
  useEffect(() => {
    if (ENV_MODE !== "production") {
      initDomToCode();
    }
  }, []);

  return (
    <div className="w-full h-full">{generateRoutes({ routes: appRoutes })}</div>
  );
}

export default App;
