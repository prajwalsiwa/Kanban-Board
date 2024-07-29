import "./App.css";
import appRoutes from "./routes/appRoutes";
import generateRoutes from "./routes/generateRoutes";

function App() {
  return (
    <div className="w-full h-full">
      {generateRoutes({ routes: appRoutes })}
    </div>
  );
}

export default App;
