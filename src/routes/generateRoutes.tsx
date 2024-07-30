import { ReactNode, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Fallback from "../Components/common/Fallback";
import { IRoute } from "./types";

interface generateRoutesProps {
  routes: IRoute[];
  fallback?: ReactNode;
}

function generateRoutes({
  routes,
  fallback = <Fallback />,
}: generateRoutesProps) {
  return (
    <Suspense fallback={fallback}>
      <Routes>
        {routes?.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default generateRoutes;
