import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = []


  public constructor(private _recipeService: RecipeService, private _router: Router, private _currentRoute: ActivatedRoute){}

  public ngOnInit(){
    this.recipes = this._recipeService.getRecipes();
  }

  public onNewRecipe(): void {
    this._router.navigate(['new'], {relativeTo: this._currentRoute});
  }
}
