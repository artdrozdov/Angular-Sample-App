import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @Output() onItemAdded = new EventEmitter<Ingredient>()

  public addItem(name: string, amount: number){
    this.onItemAdded.emit(new Ingredient(name, amount));
    console.log(name, amount);
  }
}
