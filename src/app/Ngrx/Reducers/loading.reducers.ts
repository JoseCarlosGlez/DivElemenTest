import { createReducer, on } from '@ngrx/store';
import { IsLoaded, IsLoading } from '../Actions/loading.actions';

export interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false,
};

const _RepoInformationReducer = createReducer(
  initialState,
  on(IsLoading, (state) => ({ ...state, isLoading: true })),
  on(IsLoaded, (state) => ({ ...state, isLoading: false }))
);

export const RepoInformationReducer = (state, action) =>
  _RepoInformationReducer(state, action);
