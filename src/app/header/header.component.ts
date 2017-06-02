import {Component, EventEmitter, Output} from '@angular/core'
import {AuthService} from "../auth/auth.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent
{
  constructor(private service: AuthService, private router: Router)
  {

  }

  logout()
  {
    this.service.logout();
    this.router.navigate(['/recipes']);
  }

  isAuthenticated(): boolean
  {
    return this.service.isToken();
  }
}
