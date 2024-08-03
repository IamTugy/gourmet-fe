import { twMerge } from "tailwind-merge";
import { components } from "~/lib/api/v1/openapi";

export const SubtitleBlock = ({
  text,
  size,
  bold,
}: components["schemas"]["SubtitleBlock"]) => (
  <h2
    className={twMerge(
      size === "xs" && "text-xs",
      size === "sm" && "text-sm",
      size === "md" && "text-base",
      size === "lg" && "text-lg",
      size === "xl" && "text-xl",
      bold && "font-bold"
    )}
  >
    {text}
  </h2>
);
