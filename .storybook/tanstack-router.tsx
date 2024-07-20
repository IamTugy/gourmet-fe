import React from 'react';
import { Decorator } from '@storybook/react/*';
import { createRootRoute } from '@tanstack/react-router';
import { createRoute } from '@tanstack/react-router';
import { createMemoryHistory } from '@tanstack/react-router';
import { RouterProvider, createRouter } from "@tanstack/react-router";

const rootRoute = createRootRoute();
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: "/" });
const memoryHistory = createMemoryHistory({ initialEntries: ["/"] });
const routeTree = rootRoute.addChildren([indexRoute]);
const router = createRouter({ routeTree, history: memoryHistory });

export const withRouter: Decorator  = (Story, context) => (
    <RouterProvider 
        router={router}
        defaultComponent={() => <Story {...context} />}
    />
);
