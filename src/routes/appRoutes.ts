import Login from "../views/Login";
import { IRoute } from "./types";

const appRoutes: IRoute[] = [
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
];

export default appRoutes;
