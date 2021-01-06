import { createAction, props } from '@ngrx/store';
import { IUserInformation } from 'src/app/interfaces/UserInformation.interface';

export const setUserName = createAction(
  '[Github Information] userName Setted',
  props<{ UserGithub: IUserInformation }>()
);
