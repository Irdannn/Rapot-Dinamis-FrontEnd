import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'; 
import { TokenApiModel } from '../models/token-api.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl:string = "https://localhost:7048/api/User/";
  private userPayLoad:any;
  constructor(private http : HttpClient, private router: Router) { 
    this.userPayLoad = this.decodedToken();
  }

  // signUp(userObj:any) {
  //   return this.http.post<any>(`${this.baseurl}register`, userObj)
  // }

  public signUp(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>('https://localhost:8000/api/auth/register', { name, email, password })
      .pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('access_token', response.token);
          }
          return response;
        })
      );
  }

  login(loginObj:any) {
    return this.http.post<any>(`${this.baseurl}authenticate`, loginObj)
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['login'])
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  storeRefreshToken(tokenValue: string) {
    localStorage.setItem('refreshToken', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getRefreshToken(){
    return localStorage.getItem('refreshToken')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  decodedToken(){
    //const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    //return jwtHelper.decodeToken(token);
  }

  getfullNameFromToken(): any{
    if(this.userPayLoad)
    return this.userPayLoad.unique_name;
  }

  getRoleFromToken(){
    if(this.userPayLoad)
    return this.userPayLoad.role;
  }

  renewToken(tokenApi : TokenApiModel){
    return this.http.post<any>(`${this.baseurl}refresh`, tokenApi)
  }

  // hideshownav(): boolean{

  // }
}
