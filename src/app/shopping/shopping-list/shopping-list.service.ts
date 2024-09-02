import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient";

export class ShoppingListService {
    private _ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomaotes', 12),
        new Ingredient('Cheese', 1)
      ];
    public ingredientsChanged = new EventEmitter<Ingredient[]>();
    public getIngredients(): Ingredient[] {
        return this._ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient): void {
        this._ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

}