import React from 'react';
import Gnb from '../components/Gnb';
import { MainWrap } from './Main';
import StoredRepoContainer from '../components/StoredRepoContainer';
const Issue = () => {
  return (
    <MainWrap>
      <Gnb />
      <div>컴포넌트</div>
      <StoredRepoContainer />
    </MainWrap>
  );
};

export default Issue;
