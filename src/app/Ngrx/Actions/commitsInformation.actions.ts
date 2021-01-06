import { createAction, props } from '@ngrx/store';
import { ICommitInformation } from 'src/app/interfaces/commitInformation.interface';

export const setCommit = createAction(
  '[Commit Imformation] commit Setted',
  props<{ CommitRepo: ICommitInformation[] }>()
);
