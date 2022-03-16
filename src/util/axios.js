import axios from 'axios';
import { header } from '../constants';

export const getRepository = async (keyword, number) => {
  const response = await axios.get(
    `/api/search/repositories`,
    {
      q: keyword,
      per_page: 10,
      page: number,
    },
    { header },
  );
  const repoData = response.body;
  return repoData;
};

export const getIssue = async (owner_id, name) => {
  const response = await axios.get(
    `/api/repos/${owner_id}/${name}/issues`,
    {},
    {
      header,
    },
  );
  const issueData = response.body;
  return issueData;
};
