import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent {
  public constructor(){}
  public ngOnInit(){
  }
}
