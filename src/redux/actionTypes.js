export const GET_REPO_DATA = 'GET_REPO_DATA';
export const GET_ISSUE_DATA = 'GET_ISSUE_DATA';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

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

export const notify = (message, time = 500) => {
  dispatch => {
    dispatch(showMessage(message));
    setTimeout(() => {
      dispatch(deleteMessage());
    }, time);
  };
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
