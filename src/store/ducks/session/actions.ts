import { action } from 'typesafe-actions';

import { SessionTypes, User } from './types';

export const login = (user: User) => action(SessionTypes.LOGIN, user);
