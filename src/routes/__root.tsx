import { TopBar } from "@/top-bar/top-bar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <TopBar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
