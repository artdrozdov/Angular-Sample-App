import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [];

  public constructor(private _shoppingListService: ShoppingListService){}

  public ngOnInit(){
    this.ingredients = this._shoppingListService.getIngredients();
    this._shoppingListService.ingredientsChanged.subscribe(x => this.ingredients = x);
  }
}
