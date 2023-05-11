import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt'; 
import { TokenApiModel } from '../models/token-api.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl:string = "http://localhost:8000/api/auth/";
  private userPayLoad:any;
  constructor(private http : HttpClient, private router: Router) { 
    this.userPayLoad = this.decodedToken();
  }

  signUp(userObj:any) {
    return this.http.post<any>(`${this.baseurl}register`, userObj)
  }

  login(loginObj:any) {
    return this.http.post<any>(`${this.baseurl}login`, loginObj)
  }
  signOut() {
    localStorage.clear();
    this.router.navigate(['login'])
  }

  storeToken(token: string){
    localStorage.setItem('token', token)
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
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    return jwtHelper.decodeToken(token);
  }

  getfullNameFromToken(): any{
    if(this.userPayLoad)
    return this.userPayLoad.name;
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
