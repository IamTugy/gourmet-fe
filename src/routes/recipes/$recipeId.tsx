import { createFileRoute } from "@tanstack/react-router";
import { RecipeViewer } from "~/pages/recipe-viewer/recipe-viewer.page";

export const Route = createFileRoute("/recipes/$recipeId")({
  component: () => <RecipeViewer />,
});
