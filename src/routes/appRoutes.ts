import Signup from "@Views/Login/Signup";
import Login from "../views/Login";
import { IRoute } from "./types";
import ResetLink from "@Views/Login/ResetLink";
import ResetPassword from "@Views/Login/ResetPassword";
import LandingPage from "@Views/Dashboard";

const appRoutes: IRoute[] = [
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Sign up",
    path: "/signup",
    component: Signup,
  },
  {
    name: "reset link",
    path: "/reset",
    component: ResetLink,
  },
  {
    name: "Sign up",
    path: "/resetPassword",
    component: ResetPassword,
  },
  {
    name: "Dashboard",
    path: "/",
    component: LandingPage,
  },
];

export default appRoutes;
