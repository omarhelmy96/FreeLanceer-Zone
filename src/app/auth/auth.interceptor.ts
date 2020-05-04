import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor( private router: Router) {

    }

    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        var token = localStorage.getItem('token')
        if (token != null) {
            //lazm 23ml clone ll request hne
            // zyha zae de bas b3mlha clone 
            // new HttpHeaders({'Authorization': `Bearer ${token}`})
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
            // da be3ml handle ll cloned Request
            // tap da observable mn no3 HttpEvent
            return next.handle(clonedReq).pipe(tap(
                succ => {},
                err => {
                    if(err.status == 401) {
                        localStorage.removeItem('token')
                        this.router.navigate(['/user/login']);
                    } else if (err.status == 403) {
                        this.router.navigate(['/forbidden']);
                    }
                }
            ));
        } else {
            return next.handle(req.clone());
        }
    }

}