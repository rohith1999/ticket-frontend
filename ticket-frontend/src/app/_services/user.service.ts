import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  requestHeader = new HttpHeaders(
    { "No-Auth": "True" });

  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

  public login(loginData: any) {
    return this.httpClient.post(environment.baseUrl + "/jwt/authenticate",
      loginData, { headers: this.requestHeader })
  }

  public forUser(){
    return this.httpClient.get(environment.baseUrl +"/user/for-user",{responseType:'text'})
  }

  public forAdmin(){
    return this.httpClient.get(environment.baseUrl +"/user/for-admin",{responseType:'text'})
  }

  public getUserCount(){
    return this.httpClient.get(environment.baseUrl+"/user/get-count",{responseType:"text"})
  }


  public roleMatch(allowedRoles: any): boolean {

    let isMatch = false

    const userRoles: any = this.userAuthService.getRoles()

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {

          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true
            return isMatch
          } else {
            return isMatch
          }

        }
      }
    }

    return isMatch

  }

}
