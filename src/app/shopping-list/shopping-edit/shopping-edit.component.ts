import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingridient} from "../../shared/ingridient.model";
import {ShoppingService} from "../shopping.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy
{
  @ViewChild('f') editForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editingItemId: number;
  editingItem: Ingridient;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit()
  {
    this.subscription = this.shoppingService.startEditing
      .subscribe(
        (index: number) =>
        {
          this.editMode = true;
          this.editingItemId = index;
          this.editingItem = this.shoppingService.getIngridient(index);

          this.editForm.setValue(
            {
              name: this.editingItem.name,
              amount: this.editingItem.amount
            });
        }
      );
  }

  addIngridient(form: NgForm)
  {
    const ing = new Ingridient(
      form.value.name,
      form.value.amount);

    if (!this.editMode)
    {
      this.shoppingService.addIngridient(ing);
    }
    else
    {
      this.shoppingService.updateUngridient(this.editingItemId, ing);
    }

    this.editingItem = null;
    this.editMode = false;
    form.reset();
  }

  onDelete()
  {
    this.shoppingService.deleteIngridient(this.editingItemId);

    this.editMode = false;
    this.editingItem = null;
    this.editForm.reset();
  }

  clear()
  {
    this.editMode = false;
    this.editingItem = null;
    this.editForm.reset();
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
