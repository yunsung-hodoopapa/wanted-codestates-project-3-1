export const GET_REPO_DATA = 'GET_REPO_DATA';
export const GET_ISSUE_DATA = 'GET_ISSUE_DATA';

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
