import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  public recipe:Recipe

  public constructor(private _recipeService: RecipeService){

  }

  public onSelected(){
    this._recipeService.onRecipeSelected.emit(this.recipe);
  }
}
