import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ICommitInformation } from 'src/app/interfaces/commitInformation.interface';
import { AppState } from 'src/app/Ngrx/app.reducers';

@Component({
  selector: 'app-line-time-commits',
  templateUrl: './line-time-commits.component.html',
  styleUrls: ['./line-time-commits.component.css'],
})
export class LineTimeCommitsComponent implements OnInit {
  commits: ICommitInformation[] = [];
  constructor(public _store: Store<AppState>) {
    this.getStore();
  }

  getStore() {
    this._store
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
}
