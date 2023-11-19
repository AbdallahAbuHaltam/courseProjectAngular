import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

export interface AuthResponseData{
    kind:string,
    idToken:string,
    email:string,
    password:String,
    refreshToken: string,
    expiresIn:string,
    localId:string,
    registered?:boolean
}

@Injectable({
    providedIn: "root",
})
export class AuthService{
    constructor(private http:HttpClient){}

    signup(email:string,password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAJQELi3PfL1hU6szlXLYowkVbMcGvv-Sg',
        {
            email:email,
            password:password,
            returnSecureToken:true,
        }
        ).pipe(catchError(this.handleError));
    }
    login(email:string,password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAJQELi3PfL1hU6szlXLYowkVbMcGvv-Sg',{
            email:email,
            password:password,
            returnSecureToken:true,
        }).pipe(catchError(this.handleError));

    }
    private handleError(errorRes:HttpErrorResponse){
        let errorMessage='An Error Occurred!';
            if(!errorRes.error||errorRes.error.error){
                return throwError(errorMessage);
            }
            switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage='The email address is already in use by another account!';
                break;
            case 'OPERATION_NOT_ALLOWED':
                errorMessage='Password sign-in is disabled for this project!';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage='We have blocked all requests from this device due to unusual activity. Try again later!';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage='There is no user record corresponding to this identifier. The user may have been deleted.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage='The password is invalid or the user does not have a password';
                break;
        }
        return throwError(errorMessage);
    }
}