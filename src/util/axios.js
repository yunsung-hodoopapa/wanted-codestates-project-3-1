import axios from 'axios';
import { useQuery } from 'react-query';
import { headers } from '../constants/index';

const getRepository = async (keyword, page) => {
  try {
    const response = await axios.get(`/api/search/repositories`, {
      params: {
        q: keyword,
        per_page: 7,
        page,
      },
      headers,
    });
    const data = response.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getIssue = async (owner, repo) => {
  try {
    const response = await axios.get(`/api/repos/${owner}/${repo}/issues`, {
      headers,
    });
    const issueData = response.data;
    return issueData;
  } catch (error) {
    console.error(error);
  }
};

export const useRepoResults = (keyword, page) => {
  return useQuery(
    ['results', keyword, page],
    () => {
      return getRepository(keyword, page);
    },
    {
      enabled: !!keyword,
      keepPreviousData: true,
    },
  );
};

export const useIssueResults = (owner, repo) => {
  return useQuery(
    ['owner', owner, repo],
    () => {
      return getIssue(owner, repo);
    },
    {
      enabled: !!owner,
      keepPreviousData: true,
    },
  );
};
