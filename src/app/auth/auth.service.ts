import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class AuthService
{
  private TOKEN_KEY: string = "jwt_my_token";

  constructor(private http: Http)
  {

  }

  singinUser(email: string, password: string)
  {
    return this.http.post("http://localhost:8080/auth", new AuthObject(email, password))
      .map(
        (response: Response) =>
        {
          const data = response.json();

          //console.log("USER TOKEN:" + data.token);
          this.storeToken(data.token);

          return;
        }
      )
      .catch(
        (error: Response) =>
        {
          console.log("Error:" + error);
          return Observable.throw('Something went wrong');
        }
      );
  }

  singupUser(email: string, password: string)
  {
    return this.http.post("http://localhost:8080/auth/new", new AuthObject(email, password))
      .map(
        (response: Response) =>
        {
          const data = response.json();

          //console.log("USER TOKEN:" + data.token);
          this.storeToken(data.token);

          return data.token;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  logout()
  {
    this.removeToken();
  }

  getTestData()
  {
    const headers: Headers = new Headers({});

    headers.append('Authorization', this.getToken());

    const options = new RequestOptions({ headers: headers });

    return this.http.get("http://localhost:8080/persons", options)
      .map(
        (response: Response) =>
        {
          const data = response.json();

          console.log(data);

          return;
        }
      )
      .catch(
        (error: Response) =>
        {
          console.log("Error:" + error);
          return Observable.throw('Something went wrong');
        }
      );
  }

  storeToken(token: string)
  {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken()
  {
    return localStorage.getItem(this.TOKEN_KEY)
  }

  removeToken()
  {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isToken(): boolean
  {
    if (this.getToken()) return true;

    return false;
  }
}

export class AuthObject
{
  constructor(
    public username: string,
    public password: string)
  {

  }
}
