import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('Pizza','Description of pizza recipe','https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg')
  ]
  @Output() onRecipeSelected = new EventEmitter<Recipe>();

  public recipeSelected(recipe:Recipe){
    this.onRecipeSelected.emit(recipe);
    console.log(recipe)
  }
}
