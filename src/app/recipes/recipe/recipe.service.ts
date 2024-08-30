import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    private _recipes: Recipe[] = [
        new Recipe('Pizza','Description of pizza recipe','https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg'),
        new Recipe('Burger', 'Description of burger recipe', 'https://mapleleafhh.com/wp-content/uploads/Broiled-Beef-Burger-e1556647638183.jpg')
    ];

    public onRecipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    public getRecipes():Recipe[] {
        return this._recipes.slice();
    }
}