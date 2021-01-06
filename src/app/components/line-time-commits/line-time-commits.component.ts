import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { ICommitInformation } from 'src/app/interfaces/commitInformation.interface';
import { IsLoaded, IsLoading } from 'src/app/Ngrx/Actions/loading.actions';
import { AppState } from 'src/app/Ngrx/app.reducers';

@Component({
  selector: 'app-line-time-commits',
  templateUrl: './line-time-commits.component.html',
  styleUrls: ['./line-time-commits.component.css'],
})
export class LineTimeCommitsComponent implements OnInit {
  commits: ICommitInformation[] = [];
  commitSubs$: Subscription;
  constructor(public _store: Store<AppState>) {
    this.getStore();
  }

  getStore() {
    this.commitSubs$ = this._store
      .select('CI', 'commits')
      .pipe(
        map((commits) => {
          console.log(commits);
          this.commits = commits;
        })
      )
      .subscribe(console.log);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.commitSubs$.unsubscribe();
  }

  trackByFn(index, commit) {
    return index;
  }
}
