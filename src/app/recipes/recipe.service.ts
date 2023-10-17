import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes:Recipe[]=[
        new Recipe('Test Recipe1','This is a simple test1','https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg'),
        new Recipe('Test Recipe2','This is a simple test1','https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg'),

      ];

    getRecipes(){
        return this.recipes.slice();
    }  
    
    recipeSelected(recipe:Recipe){

    }
}