import "./App.css";
import appRoutes from "./routes/appRoutes";
import generateRoutes from "./routes/generateRoutes";

function App() {
  return (
    <div className=" flex justify-start item-start text-orange-900">
      {generateRoutes({ routes: appRoutes })}
    </div>
  );
}

export default App;
