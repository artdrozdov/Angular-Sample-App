import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { ShoppingListService } from 'src/app/shopping/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() currentRecipe:Recipe

  constructor(private _recipeService: RecipeService){}

  public toShoppingList() {
    this._recipeService.addIngredientsToShoppingList(this.currentRecipe.ingredients);
  }
}
