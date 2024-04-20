import { MainPage } from "@/pages/MainPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  REGISTER_VUZ = "register",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.REGISTER_VUZ]: "/register",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.REGISTER_VUZ]: {
    path: RoutePath.register,
    element: <RegisterPage />,
  },
};
