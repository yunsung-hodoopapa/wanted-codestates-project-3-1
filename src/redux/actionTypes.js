import { getItem, setItem } from '../util/localStorage';

export const GET_REPO_DATA = 'GET_REPO_DATA';
export const GET_ISSUE_DATA = 'GET_ISSUE_DATA';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const STORE_REPO = 'STORE_REPO';
export const DELETE_REPO = 'DELETE_REPO';

export const getRepoData = () => {
  return {
    type: GET_REPO_DATA,
  };
};

export const getIssueData = () => {
  return {
    type: GET_ISSUE_DATA,
  };
};

export const notify =
  (message, time = 500) =>
  dispatch => {
    dispatch(showMessage(message));
    setTimeout(() => {
      dispatch(deleteMessage());
    }, time);
  };

export const showMessage = message => {
  return {
    type: SHOW_MESSAGE,
    message,
  };
};

export const deleteMessage = () => {
  return {
    type: DELETE_MESSAGE,
  };
};

export const storeRepo = item => {
  const items = getItem('store') || [];
  items.push(item);
  setItem('store', items);

  return {
    type: STORE_REPO,
    payload: {
      items,
    },
  };
};

export const deleteRepo = id => {
  const items = getItem('store')?.filter(item => item.id !== id);
  setItem('store', items);

  return {
    type: DELETE_REPO,
    payload: {
      items,
    },
  };
};
