import { createReducer, on } from '@ngrx/store';
import { IRepoInformation } from 'src/app/interfaces/RepoInformation.interface';
import {
  setRepoUser,
  unsetRepoUser,
} from './../Actions/RepoInformation.actions';

export interface State{
  repos:IRepoInformation[]
}

const initialState: State={
  repos:[]
};

const _RepoInformationReducer = createReducer(
  initialState,
  on(setRepoUser, (state, { RepoGithub }) => ({...state, repos:[...RepoGithub]})),
  on(unsetRepoUser, (state) => ({ ...state, repos: [] }))
);

export const RepoInformationReducer = (state, action) =>
  _RepoInformationReducer(state, action);
