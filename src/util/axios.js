import axios from 'axios';
import { header } from '../constants';

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
      { header },
    );
    const repoData = response.body;
    return repoData;
  } catch (error) {
    console.error(error);
  }
};

export const getIssue = async (owner_id, name) => {
  try {
    const response = await axios.get(`/api/repos/${owner_id}/${name}/issues`, {
      header,
    });
    const issueData = response.body;
    return issueData;
  } catch (error) {
    console.error(error);
  }
};
