import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { IRepoInformation } from 'src/app/interfaces/RepoInformation.interface';
import { UserInformation } from 'src/app/Models/User.model';
import { unsetRepoUser } from 'src/app/Ngrx/Actions/RepoInformation.actions';
import { AppState } from 'src/app/Ngrx/app.reducers';
import { GithubApiService } from 'src/app/services/GithubApi/github-api.service';

@Component({
  selector: 'app-repo-user',
  templateUrl: './repo-user.component.html',
  styleUrls: ['./repo-user.component.css'],
})
export class RepoUserComponent implements OnDestroy {
  public reposList: IRepoInformation[] = undefined;
  public user: UserInformation = undefined;
  private GetStore: Subscription;
  constructor(
    private _store: Store<AppState>,
    private _router: Router,
    private _gs: GithubApiService
  ) {
    this.GetStore = this.getstore();
  }

  getstore() {
    return this._store
      .select('RI', 'repos')
      .pipe(
        map((repo: any) => (this.reposList = repo)),
        switchMap(() =>
          this._store.select('GI').pipe(map((user) => (this.user = user)))
        )
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._store.dispatch(unsetRepoUser());
    this.getstore().unsubscribe();
  }

  GoToSearchUser() {
    this._router.navigate(['']);
  }

  GotoTimeLine(git_commits_url: string) {
    this._gs.GetCommitsFromGithub(git_commits_url).subscribe(console.log);
  }
}
