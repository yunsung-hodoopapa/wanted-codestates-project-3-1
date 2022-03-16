import React from 'react';
import Gnb from '../components/Gnb';
import { MainWrap } from './Main';
import StoredRepoContainer from '../components/StoredRepoContainer';
import StoredRepository from '../components/StoredRepository';

const Issue = () => {
  return (
    <MainWrap>
      <Gnb />
      <StoredRepoContainer />
    </MainWrap>
  );
};

export default Issue;
