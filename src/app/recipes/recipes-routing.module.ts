import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGurad } from "../auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeResolveService } from "./recipe-resolve.service";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";

const routes:Routes=[
    {path:'recipes',component:RecipesComponent,canActivate:[AuthGurad],children:[
        {path:'',component:RecipeStartComponent},
        {path:'new',component:RecipeEditComponent},
        {path:':id',component:RecipeDetailComponent,resolve:[RecipeResolveService]},
        {path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResolveService]},

    ]},
]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule
    ]
})
export class RecipesRoutingModule{}