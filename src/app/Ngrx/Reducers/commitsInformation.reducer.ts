import { Action, createReducer, on } from '@ngrx/store';
import { ICommitInformation } from 'src/app/interfaces/commitInformation.interface';
import { setCommit } from '../Actions/commitsInformation.actions';
export interface State {
  commits: ICommitInformation[];
}

const initialState: State = {
  commits: [],
};

const _commitInformationReducer = createReducer(
  initialState,
  on(setCommit, (state, { CommitRepo }) => ({
    ...state,
    commits: [...CommitRepo],
  }))
);

export const commitInformationReducer = (state, action) =>
  _commitInformationReducer(state, action);
