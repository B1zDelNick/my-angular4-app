import {EventEmitter, Injectable} from '@angular/core';
import {Ingridient} from "../shared/ingridient.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ShoppingService
{
  startEditing = new Subject<number>();
  ingridientAdded = new Subject<Ingridient[]>();

  private ingridients: Ingridient[] = [
    new Ingridient("Apple", 5),
    new Ingridient("Banana", 2)
  ];

  deleteIngridient(index: number)
  {
    this.ingridients.splice(index, 1);
    this.ingridientAdded.next();
  }

  updateUngridient(index: number, newIng:Ingridient)
  {
    this.ingridients[index] = newIng;
    this.ingridientAdded.next();
  }

  getIngridients(): Ingridient[]
  {
    return this.ingridients.slice();
  }

  getIngridient(index: number)
  {
    return this.ingridients[index];
  }

  addIngridient(ing: Ingridient): void
  {
    this.ingridients.push(ing);
    this.ingridientAdded.next();

  }

  addIngridients(ings: Ingridient[]): void
  {
    this.ingridients.push(...ings);
    this.ingridientAdded.next();

  }
}
