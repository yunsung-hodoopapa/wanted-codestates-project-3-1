import { getItem } from '../../util/localStorage';
import {
  GET_REPO_DATA,
  GET_ISSUE_DATA,
  STORE_REPO,
  DELETE_REPO,
} from '../actionTypes';

const initialState = {
  issue: [],
  store: getItem('store') || [],
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
    case STORE_REPO: {
      return {
        ...state,
        store: action.payload.items,
      };
    }
    case DELETE_REPO: {
      return {
        ...state,
        store: action.payload.items,
      };
    }

    default: {
      return state;
    }
  }
};
