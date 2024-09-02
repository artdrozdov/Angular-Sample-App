import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "src/app/shared/ingredient";
import { ShoppingListService } from "src/app/shopping/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private _recipes: Recipe[] = [
        new Recipe(
            'Pizza',
            'Description of pizza recipe',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg', 
            [
                new Ingredient('Pizza base', 1),
                new Ingredient('Peperoni', 6),
                new Ingredient('Cheese', 1)
            ]
        ),
        new Recipe(
            'Burger', 
            'Description of burger recipe', 
            'https://mapleleafhh.com/wp-content/uploads/Broiled-Beef-Burger-e1556647638183.jpg', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bride', 2),
                new Ingredient('Cheese', 1),
                new Ingredient('Salad', 1)
            ])
    ];

    public onRecipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    public constructor(private _shoppingListService: ShoppingListService){}

    public getRecipes():Recipe[] {
        return this._recipes.slice();
    }

    public addIngredientsToShoppingList(ings: Ingredient[]): void
    {
        for(let i of ings){
            this._shoppingListService.addIngredient(i);
        }
    }
}