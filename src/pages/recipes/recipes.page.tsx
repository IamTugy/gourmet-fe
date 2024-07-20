import { Search } from "@/search/search";
import { mockGetRecipesResponse } from "../../mock-data";
import { Icon } from "@/icon/icon";
import { Link } from "@tanstack/react-router";

export const Recipes = ({ isGrid = false }: { isGrid?: boolean }) => {
  const recipes = mockGetRecipesResponse;
  return (
    <main className="flex flex-col gap-4 p-2">
      <h1 className="text-xl font-bold">Discover Best Recipes</h1>
      <Search placeholder="Search All Recipes" />
      <hr />
      {isGrid ? (
        <section className="grid-cols-2 grid gap-4">
          {recipes.items.map((recipe) => {
            return (
              <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="flex flex-col">
                <img
                  className="rounded-lg aspect-[4/3]"
                  src={recipe.thumbnail}
                  alt={recipe.name}
                />
                <div className="flex justify-between">
                  <h2>{recipe.name}</h2>
                  <div className="flex items-center">
                    <p className="text-gray-500 text-xs">{recipe.rating}</p>
                    <Icon
                      iconName="star"
                      className="text-yellow-500 text-base"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      ) : (
        <section className="flex flex-col gap-4">
          {recipes.items.map((recipe) => {
            return (
              <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="flex flex-row h-24 w-full gap-4">
                <img
                  className="rounded-lg w-28"
                  src={recipe.thumbnail}
                  alt={recipe.name}
                />
                <div className="flex flex-col flex-1 border-b-2 justify-center">
                  <h2 className="text-lg">{recipe.name}</h2>
                  <p className="text-sm text-gray-500">{recipe.description}</p>
                  <div className="flex items-center">
                    <p className="text-gray-500 text-xs">{recipe.rating}</p>
                    <Icon
                      iconName="star"
                      className="text-yellow-500 text-base"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      )}
    </main>
  );
};
