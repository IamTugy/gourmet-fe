import { twMerge } from "tailwind-merge";

import { Icon } from "@/icon/icon";

export const Search = ({
  className,
  ...props
}: {
  className?: string;
} & React.ComponentProps<"input">) => {
  return (
    <div className="relative h-8 w-full flex items-center">
      <Icon
        iconName="search"
        className="absolute ltr:left-2 rtl:right-2 w-fit"
      />
      <input
        className={twMerge(
          "rounded-full flex flex-row bg-gray-200 h-full ltr:pl-9 rtl:pr-9 ltr:pr-2 rtl:pl-2 w-full",
          className
        )}
        {...props}
      />
    </div>
  );
};
