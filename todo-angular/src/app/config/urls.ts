import {environment} from '../../environments/environment';

export const URL = {
  lists: `${environment.server}/todolists`,
  list: `${environment.server}/todolist`,
  authUrl: `${environment.server}/auth`
};
