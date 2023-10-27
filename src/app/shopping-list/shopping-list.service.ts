import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    
    private ingredients:Ingredient[]=[
        new Ingredient('Cheese',1),
        new Ingredient('Tomatoes',5),
    
      ];
    ingredientChanged=new Subject<Ingredient[]>();  
    
    getIngredients(){
        return this.ingredients.slice();
    }

    ingredientAdded(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
      }
    addIngredients(ingredient:Ingredient[]){
      this.ingredients.push(...ingredient);
      this.ingredientChanged.next(this.ingredients.slice());
    }  
}