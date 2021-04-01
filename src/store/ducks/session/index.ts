/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';

import produce from 'immer';

import { SessionState, SessionTypes } from './types';

const INITIAL_STATE: SessionState = {
  user: null,
};

const reducer: Reducer<SessionState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SessionTypes.LOGIN:
      return produce(state, draft => {
        const user = action.payload;

        draft.user = user;
      });

    default:
      return state;
  }
};

export default reducer;
