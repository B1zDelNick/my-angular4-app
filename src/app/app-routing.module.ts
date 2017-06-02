import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {SinginComponent} from "./auth/singin/singin.component";
import {SingupComponent} from "./auth/singup/singup.component";

const routes: Routes =
  [
    {path: 'shopping', component: ShoppingListComponent },
    {path: 'singin', component: SinginComponent },
    {path: 'singup', component: SingupComponent },
    {path: '**', redirectTo: '/recipes' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
