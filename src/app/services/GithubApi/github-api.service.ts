import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Subscription } from 'rxjs';
import { isEmpty, map, tap } from 'rxjs/operators';
import { ICommitInformation } from 'src/app/interfaces/commitInformation.interface';
import { CommitInformation } from 'src/app/Models/Commit.model';
import { RepoInformation } from 'src/app/Models/Repo.model';
import { AppState } from 'src/app/Ngrx/app.reducers';
import { commitInformationReducer } from 'src/app/Ngrx/Reducers/commitsInformation.reducer';

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

  public GetCommitsFromGithub(git_commits_url: string) {
    git_commits_url = git_commits_url.split('{')[0];

    return this._http.get(git_commits_url).pipe(
      map((CommitsGithub: any[]) => {
        let Commits: ICommitInformation[] = [];
        CommitsGithub.forEach((commit) => {
          Commits.push(
            CommitInformation.FromGithub(
              commit.commit.author,
              commit.commit.message
            )
          );
        });
        return Commits;
      })
    );
  }
}
