/* eslint-disable react-refresh/only-export-components */
import {
    createMemoryHistory,
    createRootRoute,
    createRoute,
    createRouter,
    useRouterState,
    type NotFoundRouteProps,
    RouterProvider,
} from "@tanstack/react-router";
import { createContext, useContext, type ReactNode } from "react";

//#region Dummy story router
function RenderStory() {
    const storyFn = useContext(CurrentStoryContext);
    if (!storyFn) {
        throw new Error("Storybook root not found");
    }
    return storyFn();
}

export const CurrentStoryContext = createContext<(() => ReactNode) | undefined>(undefined);

function NotFoundComponent(_props: NotFoundRouteProps) {
    const state = useRouterState();
    return (
        <div>
            <i>Warning:</i> Simulated route not found for path <code>{state.location.href}</code>
        </div>
    );
}

const storyPath = "/__story__";
const storyRoute = createRoute({
    path: storyPath,
    getParentRoute: () => rootRoute,
    component: RenderStory,
});

const storyRoute1 = createRoute({
    path: "/recipes/*",
    getParentRoute: () => rootRoute,
    component: RenderStory,
});

const rootRoute = createRootRoute({
    notFoundComponent: NotFoundComponent,
});
rootRoute.addChildren([
    storyRoute,
    storyRoute1,
]);

export const storyRouter = createRouter({
    history: createMemoryHistory({ initialEntries: [
        storyPath,
        "/recipes/*",
    ] }),
    routeTree: rootRoute,
});
//#endregion

export const  withRouter = (storyFn: () => ReactNode) => {
    return (
      <CurrentStoryContext.Provider value={storyFn}>
          <RouterProvider router={storyRouter} />
      </CurrentStoryContext.Provider>
    );
}
