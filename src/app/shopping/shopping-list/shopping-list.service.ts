import { Ingredient } from "src/app/shared/ingredient";
import { Subject } from "rxjs";

export class ShoppingListService {
    private _ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomaotes', 12),
        new Ingredient('Cheese', 1)
      ];
    public ingredientsChanged = new Subject<Ingredient[]>();
    public getIngredients(): Ingredient[] {
        return this._ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient): void {
        this._ingredients.push(ingredient);
        this.ingredientsChanged.next(this.getIngredients());
    }

}