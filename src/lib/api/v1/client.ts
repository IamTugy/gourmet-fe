import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "./openapi";

const fetchClient = createFetchClient<paths>({
  baseUrl: "/api",
});
export const $api = createClient(fetchClient);
