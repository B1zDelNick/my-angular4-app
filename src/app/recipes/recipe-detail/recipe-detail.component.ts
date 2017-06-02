import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit
{
  recipe: Recipe = null;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  )
  {

  }

  ngOnInit()
  {
    this.route.params
      .subscribe(
        (params: Params) =>
        {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onEdit()
  {
    //this.router.navigate(['../', this.id, 'edit']);
    //this.router.navigate(['/recipes', this.id, 'edit']);
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete()
  {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

  addToShoppingList()
  {
    this.recipeService.addIngridientsToShoppingList(this.recipe.ingridients);
  }
}
