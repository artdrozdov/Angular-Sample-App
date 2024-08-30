import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = []


  public constructor(private _recipeService: RecipeService){}

  public ngOnInit(){
    this.recipes = this._recipeService.getRecipes();
  }
}
