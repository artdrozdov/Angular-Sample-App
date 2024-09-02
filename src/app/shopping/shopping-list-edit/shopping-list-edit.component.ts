import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  public constructor(private _shoppingListService: ShoppingListService){}

  public addItem(name: string, amount: number){
    let ing = new Ingredient(name, amount);
    this._shoppingListService.addIngredient(ing);
  }
}
