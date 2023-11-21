import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";


const appRoutes:Route[]=[
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',loadChildren:() => import('./recipes/recipes.module').then(m => m.RecipesModule)}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule],
})
export class AppRoutingModule{

}