import { ActionReducerMap } from '@ngrx/store';
import { IRepoInformation } from '../interfaces/RepoInformation.interface';
import { RepoInformation } from '../Models/Repo.model';
import { UserInformation } from '../Models/User.model';
import { GithubInformationReducer } from './Reducers/GithubInformation.reducer';
import * as RIR from './Reducers/RepoInformation.reducer';

export interface AppState {
  GI: UserInformation;
  RI: RIR.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  GI: GithubInformationReducer,
  RI: RIR.RepoInformationReducer,
};
