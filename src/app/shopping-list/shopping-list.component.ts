import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements  OnInit,OnDestroy{
  ingredients:Ingredient[];
  slSubscription:Subscription;


  constructor(private shoppinglistService:ShoppingListService){}
  ngOnInit(): void {
    this.ingredients=this.shoppinglistService.getIngredients();
    this.slSubscription=this.shoppinglistService.ingredientChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients = ingredients;
      }
    );
  }

  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
  ngOnDestroy(): void {
    this.slSubscription.unsubscribe();
  }
}
