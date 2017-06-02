import {Component, OnDestroy, OnInit} from '@angular/core';
import {IIngridient, Ingridient} from "../shared/ingridient.model";
import {ShoppingService} from "./shopping.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy
{
  ingridients: Ingridient[];
  subscription: Subscription;

  constructor(private shoppingService: ShoppingService)
  {
  }

  ngOnInit()
  {
    this.ingridients = this.shoppingService.getIngridients();

    this.subscription = this.shoppingService.ingridientAdded
      .subscribe(
        () =>
        {
          this.ingridients = this.shoppingService.getIngridients();
        }
      );
  }

  onEdit(index: number)
  {
    this.shoppingService.startEditing.next(index);
  }

  ngOnDestroy(): void
  {
    this.subscription.unsubscribe();
  }
}
