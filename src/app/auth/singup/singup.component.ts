import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit
{
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit()
  {
    if (this.service.isToken())
      this.router.navigate(['/recipes']);
  }

  onSignup(form: NgForm)
  {
    const email = form.value.email;
    const pass = form.value.password;

    this.service.singupUser(email, pass)
      .subscribe(
        (token: string) =>
        {
          this.router.navigate(['/recipes']);
        }
      );
  }
}
