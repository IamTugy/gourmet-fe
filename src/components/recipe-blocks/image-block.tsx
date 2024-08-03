import { components } from "~/lib/api/v1/openapi";

export const ImageBlock = ({ url }: components["schemas"]["ImageBlock"]) => (
  <img src={url} />
);
