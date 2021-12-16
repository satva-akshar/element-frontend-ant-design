import { NzMessageService } from 'ng-zorro-antd/message';
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ResponseStatus } from '../@shared/enum';

// @Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private router: Router, private message: NzMessageService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status,
                };
                if (data['status'] == ResponseStatus.Unauthorized) {
                    localStorage.clear();
                    sessionStorage.clear();
                    this.router.navigate(['login']);
                    this.message.warning('Please Login Again, Session Expired!', {
                        nzDuration: 1150,
                    });
                }
                return throwError(error);
            })
        );
    }
}
