import { createFileRoute } from "@tanstack/react-router";
import { Recipes } from "~/pages/recipes/recipes.page";

export const Route = createFileRoute("/recipes/")({
  component: () => <Recipes />,
});
