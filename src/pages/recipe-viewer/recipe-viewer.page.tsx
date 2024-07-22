import pluralize from "pluralize";
import {z} from 'zod';
import { Icon } from "@/icon/icon";
import { mockUser } from "~/mock-data";
import { Route } from "~/routes/recipes/$recipeId";
import { Recipe } from "~/models/recipe";
import { User } from "~/models/user";
import { useEffect } from "react";
import { recipes } from "~/assets/recipes";
import { IngredientOptiions } from "~/assets/ingredients";
import { IngredientOption } from "~/models/saved_data";

const IngredientsList = ({ ingredients, language }: { ingredients: z.infer<typeof Recipe>["ingredient_sections"][0]["ingredients"],
language: z.infer<typeof Recipe>["language"]
 }) => {
  const ingredientOptions = z.array(IngredientOption).parse(IngredientOptiions)
  return <table className="flex w-fit pl-3">
    <tbody>
      {ingredients.map((ingredient) => (
        <tr key={ingredient.id}>
          <td className="px-3">
            <input type="checkbox" />
          </td>
          <td>
            {ingredient.quantity}{" "}
            {pluralize(ingredient.unit, ingredient.quantity)}
          </td>
          <td className="px-3">{
            ingredientOptions.find((option) => option.id === ingredient.id)?.name[language]
          }</td>
        </tr>
      ))}
    </tbody>
  </table>
}

export const RecipeViewer = () => {
  const { recipeId } = Route.useParams();
  const recipe = Recipe.parse(recipes.find((recipe) => recipe.id === recipeId));
  const author = User.parse(mockUser);

  useEffect(() => {
    document.title = recipe.name;
    document.dir = "ltr";
    if (recipe.language === "hebrew") {
      document.dir = "rtl";
    }
  }, [recipe]);

  return (
    <main className="w-screen">
      <header className="flex justify-between p-2 items-center" dir="ltr">
        <div className="flex flex-center gap-3">
          <Icon iconName="account_circle" className="text-gray-500" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">{author.name}</h1>
            <h2 className="text-xs text-gray-500">{author.hashtag}</h2>
          </div>
        </div>
      </header>
      <img
        src={recipe.image_url}
        alt={recipe.name}
        className="w-full"
      />
      <h1 className="text-2xl font-bold p-2">{recipe.name}</h1>
      <p className="text-sm p-2 text-gray-600">{recipe.description}</p>
      {recipe.ingredients_image_url && <img
        src={recipe.ingredients_image_url}
        alt="Ingredients"
        className="w-full p-2"
      />}
      <h2 className="text-lg px-2 font-bold">Mise en place</h2>
      {recipe.equipment && (<><h3 className="text-md p-2 font-bold">Equipment</h3>
      <ul className="px-8 list-disc">
        {recipe.equipment.map((equipment) => (
          <li key={equipment}>{equipment}</li>
        ))}
      </ul></>)}
      {
        recipe.ingredient_sections.map((section) => (
          <div key={section.name}>
            <h3 className="text-md p-2 font-bold">{section.name}</h3>
            <IngredientsList ingredients={section.ingredients} language={recipe.language} />
          </div>
        ))
      }
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
