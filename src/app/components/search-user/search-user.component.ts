import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  pluck,
  switchMap,
  tap,
} from 'rxjs/operators';
import { IUserInformation } from 'src/app/interfaces/UserInformation.interface';
import { UserInformation } from 'src/app/Models/User.model';
import { AppState } from 'src/app/Ngrx/app.reducers';
import { setUserName } from 'src/app/Ngrx/Actions/GithubInofrmation.actions';
import { GithubApiService } from 'src/app/services/GithubApi/github-api.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent implements OnInit {
  constructor(
    private _GithubApiServices: GithubApiService,
    private _store: Store<AppState>,
    private _router: Router
  ) {}

  public user: FormControl;
  public UserInformation: IUserInformation[] = [];

  ngOnInit(): void {
    this.user = new FormControl('');
    this.user.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value) =>
          this._GithubApiServices.GetUsersFromGithub(value).pipe(
            pluck('items'),
            catchError((error) => {
              if (error.status == 404) {
                return of('there isnt user with this userName, try again');
              }
            })
          )
        ),
        map((Users: IUserInformation[]) =>
          Users != undefined
            ? (this.UserInformation = Users)
            : (this.UserInformation = [])
        )
      )
      .subscribe();
  }

  GotoRepo(repoUrl: string, login: string, avatar: string) {
    const SetUser = new UserInformation(avatar, login, repoUrl);
    this._store.dispatch(setUserName({ UserGithub: SetUser }));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
