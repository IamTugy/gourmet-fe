export const mockGetRecipesResponse = {
  items: [
    {
      id: "1",
      name: "Recipe 1",
      description: "Recipe 1 description",
      kitchen: "Asian",
      author: "Author 1",
      rating: 7.2,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX0mAaE6DKGj6rLemTEYGDh8c-wtNLO0N-Q&s",
    },
    {
      id: 2,
      name: "Recipe 2",
      description: "Recipe 2 description",
      kitchen: "Italian",
      author: "Author 2",
      rating: 4.5,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX0mAaE6DKGj6rLemTEYGDh8c-wtNLO0N-Q&s",
    },
    {
      id: 3,
      name: "Recipe 3",
      description: "Recipe 3 description",
      kitchen: "Italian",
      author: "Author 3",
      rating: 8.9,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX0mAaE6DKGj6rLemTEYGDh8c-wtNLO0N-Q&s",
    },
    {
      id: 4,
      name: "Recipe 4",
      description: "Recipe 4 description",
      kitchen: "Italian",
      author: "Author 4",
      rating: 6.7,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX0mAaE6DKGj6rLemTEYGDh8c-wtNLO0N-Q&s",
    },
  ],
  limit: 10,
  offset: 0,
  total: 4,
} as const;

export const mockRecipeData = {
  id: "1",
  name: "Best Homemade Brownies",
  description:
    "The BEST brownie recipe! With crispy edges, fudgy middles, and rich chocolate flavor, these homemade brownies will disappear in no time.",
  cook_time: 45, // minutes
  prep_time: 15, // minutes
  servings: 16,
  servings_unit: "brownies",
  kitchen: "Asian",
  author_id: "1",
  equipment: ["8x8 Baking Dish", "Cooking Spray", "Parchment Paper"],
  ingredients_image_url:
    "https://cdn.loveandlemons.com/wp-content/uploads/2020/01/the-best-brownie-recipe-580x829.jpg",
  ingredients: [
    {
      name: "granulated sugar",
      quantity: 1.5,
      unit: "cup",
    },
    {
      name: "all-purpose flour",
      quantity: 0.66,
      unit: "cup",
    },
    {
      name: "cocoa powder",
      quantity: 0.5,
      unit: "cup",
    },
    {
      name: "powdered sugar",
      quantity: 0.5,
      unit: "cup",
    },
    {
      name: "dark chocolate chips",
      quantity: 0.5,
      unit: "cup",
    },
    {
      name: "sea salt",
      quantity: 0.5,
      unit: "tsp",
    },
    {
      name: "large eggs",
      quantity: 2,
      unit: "",
    },
    {
      name: "canola oil",
      quantity: 0.5,
      unit: "cup",
    },
    {
      name: "water",
      quantity: 2,
      unit: "tbsp",
    },
    {
      name: "vanilla extract",
      quantity: 1,
      unit: "tsp",
    },
  ],
  instructions: [
    {
      step: 1,
      description:
        "Preheat oven to 350°F. Line an 8x8-inch baking dish with parchment paper and coat with cooking spray.",
      image: null,
    },
    {
      step: 2,
      description:
        "In a large bowl, whisk together sugar, flour, cocoa powder, powdered sugar, chocolate chips, and salt.",
      image: null,
    },
    {
      step: 3,
      description:
        "In a medium bowl, whisk together eggs, oil, water, and vanilla.",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/2020/01/IMG_24922-580x767.jpg",
    },
    {
      step: 4,
      description:
        "Add wet ingredients to dry ingredients and stir until just combined.",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/2020/01/IMG_24949-580x779.jpg",
    },
    {
      step: 5,
      description:
        "Pour batter into prepared baking dish and bake until a toothpick inserted in the center comes out with a few moist crumbs, 25 to 30 minutes.",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/2020/01/IMG_24974-580x796.jpg",
    },
    {
      step: 6,
      description: "Let cool completely before slicing into squares.",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/2020/01/brownies-580x790.jpg",
    },
  ],
  rating: 7.2,
  thumbnail_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX0mAaE6DKGj6rLemTEYGDh8c-wtNLO0N-Q&s",
  image_url:
    "https://www.thespruceeats.com/thmb/88LQtV3VXf_jsqMMwvcs6hlhmxM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/one-bowl-brownies-4766996-hero-05-b953ecd618cd4007826ad6d1c6f226f3.jpg",
} as const;

export const mockUser = {
  id: "1",
  name: "Michael Tugendhaft",
  hashtag: "@tugy",
  image_url: "https://avatars.githubusercontent.com/u/31568827?v=4",
} as const;
