import { Action, createReducer, on } from '@ngrx/store';
import { IUserInformation } from 'src/app/interfaces/UserInformation.interface';
import { setUserName } from './../Actions/GithubInofrmation.actions';

export interface State {
  UserGithub: IUserInformation;
}

const initialState: State = {
  UserGithub: null,
};

const _GithubInformationReducer = createReducer(
  initialState,
  on(setUserName, (state, { UserGithub }) => ({ ...state, UserGithub }))
);

export const GithubInformationReducer = (state: State, action: Action) =>
  _GithubInformationReducer(state, action);
