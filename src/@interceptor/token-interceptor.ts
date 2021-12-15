import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
// import { AuthService } from '../../data/data-service/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        // private authService: AuthService,
        private router: Router
    ) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return 
        // this.authService.GetUserToken().pipe(
        //     mergeMap((token) => {
        //         let tokens = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJuTTFmdEdXTlRrbnlQQ2lZa25SQWFRIiwiQWNjZXNzQ29kZSI6ImIyWnNFaFVEWWxXOUVwTlA0MHJRX0EiLCJuYmYiOjE2MjkxODkzNzcsImV4cCI6MTY0NTA4Njk3NywiaWF0IjoxNjI5MTg5Mzc3fQ.TlKh3YRXPKUCp4AiXdHuxarVwOEMgR071YF9wCTyFEmJb1cQUNGej0eRelHJYaUz46G5k_COrnqVrtKVYpl6lQ";
        //         console.log(tokens);
        //         if (token) {
        //             request = request.clone({
        //                 setHeaders: {
        //                     Authorization: `${tokens}`,
        //                     Accept: 'application/json'
        //                 }
        //             });
        //         }
        //         return next.handle(request).pipe(
        //             tap(
        //                 (event) => {
        //                     if (event instanceof HttpResponse) {
        //                     }
        //                 },
        //                 (error) => {
        //                     if (error instanceof HttpErrorResponse) {
        //                         if (error.status === 401) {

        //                         }
        //                     }
        //                 }
        //             )
        //         );
        //     })
        // );
    }
}
