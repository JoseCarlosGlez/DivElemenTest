import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import { GithubApiService } from 'src/app/services/GithubApi/github-api.service';
import { setUserName } from '../Actions/GithubInofrmation.actions';
import { setRepoUser } from '../Actions/RepoInformation.actions';

@Injectable()
export class RepoEffects {
  /**
   *
   */
  constructor(
    private actions$: Actions,
    private _githubServices: GithubApiService,
    private _router: Router
  ) {}

  SetRepos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setUserName),
      mergeMap(({ UserGithub }) =>
        this._githubServices.GetReposFromGithub(UserGithub.repos_url).pipe(
          map((repos: any) => setRepoUser({ RepoGithub: repos })),
          tap(() => this._router.navigate(['repo']))
        )
      )
    )
  );
}
