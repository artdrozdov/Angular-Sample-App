import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent {
  selectedRecipe: Recipe
  public constructor(private _recipeService: RecipeService){}
  public ngOnInit(){
    this._recipeService.onRecipeSelected.subscribe(x => this.selectedRecipe = x);
  }
}
