import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, EmptyError, Observable } from 'rxjs';
import { isEmpty, map, tap } from 'rxjs/operators';
import { ICommitInformation } from 'src/app/interfaces/commitInformation.interface';
import { IUserInformation } from 'src/app/interfaces/UserInformation.interface';
import { CommitInformation } from 'src/app/Models/Commit.model';
import { RepoInformation } from 'src/app/Models/Repo.model';
import { IsLoaded, IsLoading } from 'src/app/Ngrx/Actions/loading.actions';
import { AppState } from 'src/app/Ngrx/app.reducers';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  constructor(
    private _router: Router,
    private _http: HttpClient,
    private _store: Store<AppState>
  ) {}

  /**
   * returns users that match with username
   * @param {string} username - The name of the user searched
   * @return {Observable<IUserInformation[] | boolean>}
   */
  public GetUsersFromGithub(
    username: string
  ): Observable<IUserInformation[] | boolean> {
    if (username !== null && username !== '') {
      const params = new HttpParams().set('q', username);
      return this._http.get<any>(`https://api.github.com/search/users`, {
        params,
      });
    }
    return EMPTY.pipe(isEmpty());
  }

  /**
   * return maximum 30 user repos
   * @param repo_url- The url of userRepos
   * @return {Observable<RepoInformation[]>}
   */
  public GetReposFromGithub(repo_url: string): Observable<RepoInformation[]> {
    repo_url = repo_url.split('{')[0];
    const params = new HttpParams().set('per_page', '30');
    return this._http.get(repo_url, { params }).pipe(
      map((values: RepoInformation[]) => {
        let arraysRepos: RepoInformation[] = [];
        values.forEach((repo) => {
          arraysRepos.push(
            RepoInformation.FromGithub(
              repo.name,
              repo.description,
              repo.commits_url
            )
          );
        });

        return arraysRepos;
      })
    );
  }

  /**
   * returns commit timelines from user repo
   * @param git_commits_url
   * @returns {Observable<ICommitInformation[]>}
   */
  public GetCommitsFromGithub(
    git_commits_url: string
  ): Observable<ICommitInformation[]> {
    git_commits_url = git_commits_url.split('{')[0];

    return this._http.get(git_commits_url).pipe(
      map((CommitsGithub: any[]) => {
        this._store.dispatch(IsLoading());

        let Commits: ICommitInformation[] = [];
        CommitsGithub.forEach((commit) => {
          Commits.push(
            CommitInformation.FromGithub(
              commit.commit.author,
              commit.commit.message
            )
          );
        });
        this._store.dispatch(IsLoaded());
        this._router.navigate(['commit']);
        return Commits;
      })
    );
  }
}
