import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    
    private ingredients:Ingredient[]=[
        new Ingredient('Cheese',1),
        new Ingredient('Tomatoes',5),
    
      ];
    ingredientChanged=new EventEmitter<Ingredient[]>();  
    
    getIngredients(){
        return this.ingredients.slice();
    }

      ingredientAdded(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
}