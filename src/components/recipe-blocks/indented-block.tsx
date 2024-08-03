import { components } from "~/lib/api/v1/openapi";
import { getComponent } from ".";

export const IndentedBlock = ({
  block,
}: components["schemas"]["IndentedBlock"]) => (
  <div className="rtl:pr-2 ltr:pl-2">{getComponent(block.type)(block)}</div>
);
