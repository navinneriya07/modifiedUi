import "rxjs";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';
import { User } from "../model/User";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};

@Injectable({
    providedIn:"root"
})
export class AuthService {
   
    constructor(private http: HttpClient,
                private router: Router) {

    }

    loginUser(userLoginDetails: User):Observable<User> {
        return this.http.post<User>((environment.apiBaseUrl+'api/login/validateLogin'), 
                               userLoginDetails, 
                               httpOptions);
    }
}