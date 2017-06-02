import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../auth.service";

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit
{
  loginError = 0;

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit()
  {
    if (this.service.isToken())
      this.router.navigate(['/recipes']);
  }

  onSignin(form: NgForm)
  {
    const email = form.value.email;
    const pass = form.value.password;

    this.service.singinUser(email, pass)
      .subscribe(
        () =>
        {
          this.router.navigate(['/recipes']);
        },
        (error) =>
        {
          this.loginError = 1;
        }
      );
  }

  onTest()
  {
    this.service.getTestData().subscribe(() => {});
  }
}
