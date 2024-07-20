import { Search } from "@/search/search";
import { mockGetRecipesResponse } from "../../mock-data";
import { Icon } from "@/icon/icon";

export const Recipes = ({
    isGrid,
}: {
    isGrid: boolean;
}) => {
    const recipes = mockGetRecipesResponse;
    return (
        <main className="flex flex-col gap-4">
            <header className="flex justify-between">
                <h1 className="text-xl font-bold">Discover Best Recipes</h1>
                <Icon iconName="account_circle" className="text-gray-500"/>
            </header>
            <Search placeholder="Search All Recipes"/>
            {
                isGrid ? (
                    <section className="grid-cols-2 grid gap-4">
                        {
                            recipes.items.map((recipe) => {
                                return <div key={recipe.id} className="flex flex-col">
                                    <img className="rounded-xl aspect-[4/3]" src={recipe.thumbnail} alt={recipe.name} />
                                    <div className="flex justify-between">
                                        <h2>{recipe.name}</h2>
                                        <div className="flex items-center">
                                            <p className="text-gray-500 text-xs">{recipe.rating}</p>
                                            <Icon iconName="star" className="text-yellow-500 text-base"/>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </section>
                ) : (
                    <section className="flex flex-col gap-4">
                        {
                            recipes.items.map((recipe) => {
                                return <div key={recipe.id} className="flex flex-row h-24 w-full gap-4">
                                    <img className="rounded-xl w-28" src={recipe.thumbnail} alt={recipe.name} />
                                    <div className="flex flex-col flex-1 border-b-2 justify-center">
                                        <h2 className="text-lg">{recipe.name}</h2>
                                        <p className="text-sm text-gray-500">{recipe.description}</p>
                                        <div className="flex items-center">
                                            <p className="text-gray-500 text-xs">{recipe.rating}</p>
                                            <Icon iconName="star" className="text-yellow-500 text-base"/>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </section>
                )
            }
        </main>
        
    );
}