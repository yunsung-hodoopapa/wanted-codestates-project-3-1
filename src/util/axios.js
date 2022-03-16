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
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getIssue = async (owner, repo) => {
  try {
    const response = await axios.get(`/api/repos/${owner}/${repo}/issues`, {
      params: {
        owner,
        repo,
        headers,
      },
    });
    const issueData = response.body;
    return issueData;
  } catch (error) {
    console.error(error);
  }
};

export const useRepoResults = (keyword, page) => {
  return useQuery(['results', page], () => getRepository(keyword, page), {
    enabled: !!keyword,
    keepPreviousData: true,
    // select: (data) => data.slice(0, 10),
  });
};

export const useIssueResults = (owner, repo) => {
  return useQuery(['owner', owner], () => getIssue(owner, repo), {
    enabled: !!owner,
    keepPreviousData: true,
  });
};
