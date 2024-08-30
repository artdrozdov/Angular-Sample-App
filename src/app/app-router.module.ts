import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "./recipes/recipe/recipe.component";
import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";

let routes: Routes = [
    {path: "", redirectTo: "recipes", pathMatch:"full"},
    {path: "recipes", component: RecipeComponent},
    {path:"shopping-list", component: ShoppingListComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouterModule {

}