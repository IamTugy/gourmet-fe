import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { routeTree } from "~/routeTree.gen";

export const withRouter = (initialEntries: string[]) => () => {
  const memoryHistory = createMemoryHistory({
    initialEntries: initialEntries,
  });
  const router = createRouter({ routeTree, history: memoryHistory });
  return <RouterProvider router={router} />;
};
