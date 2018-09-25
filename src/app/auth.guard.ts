import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _router: Router) { }
    canActivate(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            if (!localStorage.getItem('id_token')) {
                this._router.navigate(['/login']);
                return observer.next(false);
            } else {
                return observer.next(true);
            }
        });
    }
}
