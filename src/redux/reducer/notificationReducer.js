import { SHOW_MESSAGE, DELETE_MESSAGE } from '../actionTypes';

export const notificationReducer = (
  state = { message: '내용입력' },
  action,
) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return Object.assign({}, state, { message: action.message });

    case DELETE_MESSAGE:
      return Object.assign({}, state, { message: '' });

    default:
      return state;
  }
};
