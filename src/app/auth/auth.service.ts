import "rxjs";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';
import { User } from "../model/User";
import { ApiMessage } from "../model/ApiMessage";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};

@Injectable()
export class AuthService {
   
    constructor(private http: HttpClient,
                private router: Router) {

    }

    registerUser(registerUserDetails: User) {
        return this.http.post<ApiMessage>((environment.apiBaseUrl+'api/login/signUp'),
                                           registerUserDetails,
                                           httpOptions);
    }

    loginUser(userLoginDetails: User):Observable<User> {
        return this.http.post<User>((environment.apiBaseUrl+'api/login/validateLogin'), 
                                     userLoginDetails, 
                                     httpOptions);
    }

    logoutUser():Observable<ApiMessage>{
        return this.http.post<ApiMessage>((environment.apiBaseUrl+'api/logout'), httpOptions);
    }

    forgetPasswordUser(userForgotPassDetails: User) {
        return this.http.post<ApiMessage>((environment.apiBaseUrl+'api/forgotPassword'), userForgotPassDetails,httpOptions);
    }

    resetPasswordUser(userResetPassDetails: User){
        return this.http.post<ApiMessage>((environment.apiBaseUrl+'api/resetPassword'),userResetPassDetails,httpOptions);
    }

}