import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Subscription } from 'rxjs';
import { isEmpty, map, tap } from 'rxjs/operators';
import { RepoInformation } from 'src/app/Models/Repo.model';
import { AppState } from 'src/app/Ngrx/app.reducers';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  constructor(private _http: HttpClient, private _store: Store<AppState>) {}

  public GetUsersFromGithub(username: string) {
    if (username !== null && username !== '') {
      const params = new HttpParams().set('q', username);
      return this._http.get(`https://api.github.com/search/users`, { params });
    }
    return EMPTY.pipe(isEmpty());
  }

  public GetReposFromGithub(repo_url: string) {
    let newRepoUrl: string[] = repo_url.split('{');
    repo_url = newRepoUrl[0];
    const params = new HttpParams().set('per_page', '30');
    return this._http.get(repo_url, { params }).pipe(
      map((values: RepoInformation[]) => {
        let arraysRepos: RepoInformation[] = [];
        values.forEach((repo) => {
          arraysRepos.push(
            RepoInformation.FromGithub(
              repo.name,
              repo.description,
              repo.git_commits_url
            )
          );
        });

        return arraysRepos;
      })
    );
  }
}
