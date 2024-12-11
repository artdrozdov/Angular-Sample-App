import { Component } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  currentRecipe:Recipe
  id: number

  constructor(private _recipeService: RecipeService, private _activatedRoute: ActivatedRoute, private _router: Router){}

  public ngOnInit(){
    this._activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.currentRecipe = this._recipeService.getRecipe(this.id);
      } 
    );
  }

  public toShoppingList() {
    this._recipeService.addIngredientsToShoppingList(this.currentRecipe.ingredients);
  }

  public onEditRecipe(): void {
    this._router.navigate(['edit'], {relativeTo: this._activatedRoute});
  }
}
