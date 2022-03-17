import { GET_REPO_DATA, GET_ISSUE_DATA } from '../actionTypes';

const initialState = {
  repo: [{ repoName: 'react', owner: 'facebook' }],
  issue: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPO_DATA: {
      return {
        ...state,
        data: [...state, action.data],
      };
    }
    case GET_ISSUE_DATA: {
      return {
        ...state,
        data: [...state, action.data],
      };
    }
    default: {
      return state;
    }
  }
};
