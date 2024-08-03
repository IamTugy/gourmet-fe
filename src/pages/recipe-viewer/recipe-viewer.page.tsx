import { Icon } from "@/icon/icon";
import { mockUser } from "~/mock-data";
import { Route } from "~/routes/recipes/$recipeId";
import { User } from "~/models/user";
import { useEffect } from "react";
import { $api } from "~/lib/api/v1/client";

import { getComponent } from "@/recipe-blocks";

// const IngredientsList = ({
//   ingredients,
//   language,
// }: {
//   ingredients: z.infer<typeof Recipe>["ingredient_sections"][0]["ingredients"];
//   language: z.infer<typeof Recipe>["language"];
// }) => {
//   const ingredientOptions = z.array(IngredientOption).parse(IngredientOptiions);
//   return (
//     <table className="flex w-fit pl-3">
//       <tbody>
//         {ingredients.map((ingredient) => (
//           <tr key={ingredient.id}>
//             <td className="px-3">
//               <input type="checkbox" />
//             </td>
//             <td>
//               {ingredient.quantity}{" "}
//               {pluralize(ingredient.unit, ingredient.quantity)}
//             </td>
//             <td className="px-3">
//               {
//                 ingredientOptions.find((option) => option.id === ingredient.id)
//                   ?.name[language]
//               }
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

export const RecipeViewer = () => {
  const { recipeId } = Route.useParams();
  const { data: recipe, isLoading } = $api.useQuery(
    "get",
    "/recipes/{recipe_id}",
    {
      params: {
        path: { recipe_id: recipeId },
      },
    }
  );

  const author = User.parse(mockUser);

  useEffect(() => {
    document.title = recipe?.title || "Recipe";
    document.dir = "ltr";
    if (recipe?.language === "hebrew") {
      document.dir = "rtl";
    }
  }, [recipe]);

  if (recipe === undefined || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen">
      <header className="flex justify-between p-2 items-center" dir="ltr">
        <div className="flex flex-center gap-3">
          <Icon iconName="account_circle" className="text-gray-500" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">{author.name}</h1>
            <h2 className="text-xs text-gray-500">{author.hashtag}</h2>
          </div>
        </div>
      </header>
      <img src={recipe.image_url} alt={recipe.title} className="w-full" />
      <main className="px-4">
        <h1 className="text-2xl font-bold">{recipe.title}</h1>
        <p className="text-sm p-2 text-gray-600">{recipe.description}</p>
        <h2 className="text-lg font-bold">Mise en place</h2>
        {/* {recipe.equipment && (
        <>
          <h3 className="text-md p-2 font-bold">Equipment</h3>
          <ul className="px-8 list-disc">
            {recipe.equipment.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </>
      )} */}
        {recipe.ingredients.map((section, index) => {
          const Component = getComponent(section.type);
          return <Component {...section} key={`section-${index}`} />;
        })}
        <h2 className="text-lg p-2 font-bold">Instructions</h2>
        <div className="flex flex-col gap-3">
          {recipe.steps.map((step, i) => (
            <div key={`step-${i}`} className="flex flex-col gap-1">
              {step.map((block, j) => {
                const Component = getComponent(block.type);
                return <Component {...block} key={`block-${j}`} />;
              })}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
