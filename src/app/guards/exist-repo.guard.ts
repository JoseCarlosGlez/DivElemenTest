import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AppState } from '../Ngrx/app.reducers';

@Injectable({
  providedIn: 'root',
})
export class ExistRepoGuard implements CanActivate {
  /**
   *
   */
  constructor(public _store: Store<AppState>, private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._store.select('Loading', 'loading').pipe(
      mergeMap((loading) =>
        this._store.select('GI').pipe(
          map(({ UserGithub }) => {
            return UserGithub !== null && loading === false ? true : false;
          }),
          tap((value) => (value ? true : this._router.navigateByUrl('')))
        )
      )
    );
  }
}
