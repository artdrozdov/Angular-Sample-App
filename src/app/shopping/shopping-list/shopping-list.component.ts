import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private _subscription: Subscription;

  public constructor(private _shoppingListService: ShoppingListService){}

  public ngOnInit(){
    this.ingredients = this._shoppingListService.getIngredients();
    this._subscription = this._shoppingListService.ingredientsChanged.subscribe(x => this.ingredients = x);
  }

  public ngOnDestroy(){
    this._subscription.unsubscribe();
  }
}
