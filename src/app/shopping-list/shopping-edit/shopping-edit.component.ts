import { Component, OnDestroy, OnInit,ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy{

  @ViewChild('f',{static:false})sForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editIndex:number;
  editIngredient:Ingredient;

  constructor(private shoppinglistService:ShoppingListService){}

  ngOnInit(): void {
    this.subscription=this.shoppinglistService.startEditing.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editIndex=index;
        this.editIngredient=this.shoppinglistService.getIngredient(index);
        this.sForm.setValue({
          name:this.editIngredient.name,
          amount:this.editIngredient.amount
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form:NgForm){
    const value=form.value
    const newIngredient=new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppinglistService.updateIngredient(this.editIndex,newIngredient);
    }else{
      this.shoppinglistService.ingredientAdded(newIngredient);
    }
    this.editMode=false;
    form.reset();
  }

  onClear(){
    this.editMode=false;
    this.sForm.reset();
  }

  onDelete(){
    this.shoppinglistService.deleteIngredient(this.editIndex);
    this.onClear()
  }
}
