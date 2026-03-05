import { createBrowserRouter, redirect } from "react-router";
import { LandingPage } from "./components/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/en"),
  },
  {
    path: "/:lang",
    Component: LandingPage,
  },
]);
