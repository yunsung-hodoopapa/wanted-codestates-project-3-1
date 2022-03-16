import axios from 'axios';
import { useQuery } from 'react-query';
import { headers } from '../constants/index';

export const getRepository = async (keyword, number) => {
  try {
    const response = await axios.get(
      `/api/search/repositories`,
      {
        params: {
          q: keyword,
          per_page: 10,
          page: number,
        },
      },
      { headers },
    );
    const repoData = response.data.items;
    // console.log(repoData);
    return repoData;
  } catch (error) {
    console.error(error);
  }
};

const getIssue = async (owner_id, name) => {
  try {
    const response = await axios.get(`/api/repos/${owner_id}/${name}/issues`, {
      headers,
    });
    const issueData = response.body;
    return issueData;
  } catch (error) {
    console.error(error);
  }
};

export const useRepoResults = (keyword, number) => {
  return useQuery(['keyword', keyword], () => getRepository(keyword, number), {
    enabled: !!keyword,
    // select: (data) => data.slice(0, 10),
  });
};

export const useIssueResults = (owner_id, name) => {
  return useQuery(['owner_id', owner_id], () => getIssue(owner_id, name), {
    enabled: !!owner_id,
    // select: (data) => data.slice(0, 10),
  });
};
