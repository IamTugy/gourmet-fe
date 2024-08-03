import { CurrentUser } from "@/current-user/CurrenUser";
import { Icon } from "@/icon/icon";
import { Link } from "@tanstack/react-router";

export const TopBar = () => (
  <>
    <div
      className="flex p-2 items-center justify-between content-left"
      dir="ltr"
    >
      <div className="flex gap-2">
        <Link
          to="/"
          className="flex gap-1 [&.active]:text-green-700 align-center h-full"
        >
          <Icon iconName="home" />
          Gourmet.ai
        </Link>
      </div>
      <div className="flex-center gap-2">
        <button
          className="flex-center p-1 rounded-full hover:bg-gray-200"
          onClick={() => {
            document.body.dir = document.body.dir === "rtl" ? "ltr" : "rtl";
          }}
        >
          <Icon iconName="flag" />
        </button>
        <CurrentUser />
      </div>
    </div>
    <hr />
  </>
);
