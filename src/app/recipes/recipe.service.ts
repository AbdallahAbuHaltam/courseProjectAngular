import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
    recipeChange=new Subject<Recipe[]>();

    // private recipes:Recipe[]=[
    //     new Recipe(
    //         'Test Recipe1',
    //         'This is a simple test1',
    //         'https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg',
    //         [
    //             new Ingredient("Meat",10),
    //             new Ingredient("Cheese",5),

    //         ],
    //         ),
    //     new Recipe(
    //         'Test Recipe2',
    //         'This is a simple test1',
    //         'https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
    //         [
    //             new Ingredient("Potato",10),
    //             new Ingredient("Cheese",5),

    //         ],
    //         ),

    //   ];
    private recipes:Recipe[]=[]

    constructor(private shoppinglistService:ShoppingListService){} 

    getRecipes(){
        return this.recipes.slice();
    }  
    getRecipe(index:number){
        return this.recipes[index];
    }
    setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipeChange.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredient:Ingredient[]){
        this.shoppinglistService.addIngredients(ingredient);
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChange.next(this.recipes.slice());
    }
    updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipeChange.next(this.recipes.slice());
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChange.next(this.recipes.slice());

    }
}