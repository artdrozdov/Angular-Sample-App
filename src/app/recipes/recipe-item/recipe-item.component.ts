import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  public recipe:Recipe
}
