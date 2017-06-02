import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingridient} from "../shared/ingridient.model";
import {ShoppingService} from "../shopping-list/shopping.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService
{
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [new Recipe(
    'New Recipe',
    'Some desc',
    'http://pizza65.ru/image/catalog/revslider_media_folder/Pepperoni-Pizza-PNG-Image.png',
    [new Ingridient('Apple', 3), new Ingridient('Tomato', 1)]),
    new Recipe(
      'New Recipe',
      'Some desc',
      'http://pizza65.ru/image/catalog/revslider_media_folder/Pepperoni-Pizza-PNG-Image.png',
      [new Ingridient('Apple', 3), new Ingridient('Tomato', 1)]),
    new Recipe(
      'New Recipe',
      'Some desc',
      'http://pizza65.ru/image/catalog/revslider_media_folder/Pepperoni-Pizza-PNG-Image.png',
      [new Ingridient('Apple', 3), new Ingridient('Tomato', 1)])];


  constructor(private shoppingService: ShoppingService) {
  }

  deleteRecipe(index:number)
  {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(): Recipe[]
  {
    return this.recipes.slice();
  }

  addRecipe(rec: Recipe): void
  {
    this.recipes.push(rec);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, rec:Recipe)
  {
    this.recipes[index] = rec;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipe(id: number)
  {
    return this.recipes[id];
  }

  addIngridientsToShoppingList(list: Ingridient[])
  {
    this.shoppingService.addIngridients(list);
  }
}
