import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RecipesComponent} from "./recipes.component";
import {EmptyRecipeComponent} from "./empty-recipe/empty-recipe.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";

import {AuthGuard} from "../auth/auth-guard.service";

const recipeRoutes: Routes = [

  {path: 'recipes', component: RecipesComponent, children:
    [
      {path: '', component: EmptyRecipeComponent },
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
      {path: ':id', component: RecipeDetailComponent },
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
