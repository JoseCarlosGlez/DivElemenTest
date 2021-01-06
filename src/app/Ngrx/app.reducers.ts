import { ActionReducerMap } from '@ngrx/store';
import * as GI from './Reducers/GithubInformation.reducer';
import * as RI from './Reducers/RepoInformation.reducer';
import * as Load from './Reducers/loading.reducers';
import * as CI from './Reducers/commitsInformation.reducer';

export interface AppState {
  GI: GI.State;
  RI: RI.State;
  Loading: Load.State;
  CI: CI.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  GI: GI.GithubInformationReducer,
  RI: RI.RepoInformationReducer,
  Loading: Load.RepoInformationReducer,
  CI: CI.commitInformationReducer,
};
