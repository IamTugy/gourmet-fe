import pluralize from "pluralize";
import { Icon } from "@/icon/icon";
import { mockRecipeData } from "~/mock-data";
import { Route } from "~/routes/recipes/$recipeId";

export const RecipeViewer = ({}: {}) => {
  const { recipeId } = Route.useParams();
  const recipe = mockRecipeData;
  return (
    <main className="w-screen">
      <header className="flex justify-between p-2 items-center" dir="ltr">
        <div className="flex flex-center gap-3">
          <Icon iconName="account_circle" className="text-gray-500" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">{recipe.author}</h1>
            <h2 className="text-xs text-gray-500">{recipe.author_hashtag}</h2>
          </div>
        </div>
      </header>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full aspect-[4/2]"
      />
      <h1 className="text-2xl font-bold p-2">{recipe.name}</h1>
      <p className="text-sm p-2 text-gray-600">{recipe.description}</p>
      <img
        src={recipe.ingredients_image}
        alt="Ingredients"
        className="w-full"
      />
      <h2 className="text-lg p-2 font-bold">Mise en place</h2>
      <h3 className="text-md p-2 font-bold">Equipment</h3>
      <ul className="px-8 list-disc">
        {recipe.equipment.map((equipment) => (
          <li key={equipment}>{equipment}</li>
        ))}
      </ul>
      <h3 className="text-md p-2 font-bold">Ingredients</h3>
      <table className="flex w-fit pl-3">
        <tbody>
          {recipe.ingredients.map((ingredient) => (
            <tr key={ingredient.name}>
              <td className="px-3">
                <input type="checkbox" />
              </td>
              <td>
                {ingredient.quantity}{" "}
                {pluralize(ingredient.unit, ingredient.quantity)}
              </td>
              <td className="px-3">{ingredient.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-lg p-2 font-bold">Instructions</h2>
      <ol className="px-8 list-decimal">
        {recipe.instructions.map((instruction) => (
          <li key={instruction.step} className="pb-2">
            {instruction.description}
            {instruction.image && (
              <img
                className="pt-2"
                src={instruction.image}
                alt={`Step ${instruction.step}`}
              />
            )}
          </li>
        ))}
      </ol>
    </main>
  );
};
