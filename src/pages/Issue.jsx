import React from 'react';
import Gnb from '../components/Gnb';
import { MainWrap } from './Main';
import StoredRepoContainer from '../components/StoredRepoContainer';
import StoredRepository from '../components/StoredRepository';
import { QueryClientProvider, QueryClient } from 'react-query';
const Issue = () => {
  const queryClient = new QueryClient();
  return (
    <MainWrap>
      <QueryClientProvider client={queryClient}>
        <Gnb />
        <div>컴포넌트</div>
        <StoredRepoContainer />
      </QueryClientProvider>
    </MainWrap>
  );
};

export default Issue;
