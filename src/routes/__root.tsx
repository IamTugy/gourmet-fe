import { Icon } from "@/icon/icon";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
    <div className="flex p-2 items-center justify-between content-left"  dir="ltr">
      <div className="flex gap-2">
        <Link to="/" className="flex gap-1 [&.active]:text-green-700 align-center h-full">
          <Icon iconName="home" />
          CookEat.ai
        </Link>
      </div>
      <div className="flex">
        <Icon iconName="account_circle" className="text-gray-500" />
        <button onClick={() => {
            document.body.dir = document.body.dir === "rtl" ? "ltr" : "rtl";
        }}><Icon iconName="flag" /></button>
      </div>
    </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
