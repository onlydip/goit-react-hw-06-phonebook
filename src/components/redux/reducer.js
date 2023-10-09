import { nanoid } from 'nanoid';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload: { name, number } }) => {
    return [
      ...state,
      {
        id: nanoid(),
        name,
        number,
      },
    ];
  },

  [actions.delContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});