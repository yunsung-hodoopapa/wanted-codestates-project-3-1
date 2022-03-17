import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import ResultField from '../components/ResultField';
import { debounce } from '../util/index';
import Gnb from '../components/Gnb';
import List from '../components/List';
import RepoDetail from '../components/RepoDetail';
import { QueryClientProvider, QueryClient } from 'react-query';
import Pagination from '../components/Pagination';

const Main = () => {
  const queryClient = new QueryClient();
  const [changeValue, setChangeValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [detailContent, setDetailContent] = useState({
    id: '',
    full_name: '',
    description: '',
    updated_at: '',
    avatar_url: '',
  });

  const searchInput = val => {
    setInputValue(val);
  };
  const clickKey = e => {
    if (e.code === 'Enter') {
      searchInput(e.target.value);
    }
  };
  const onChange = e => {
    setChangeValue(e.target.value);
  };
  const clickBtn = () => {
    searchInput(changeValue);
  };
  const clickRepo = (id, full_name, description, updated_at, avatar_url) => {
    setDetailContent({ id, full_name, description, updated_at, avatar_url });
  };

  const clickRepo = (detailContent) => {
    setDetailContent(detailContent);
  };

  return (
    <MainWrap>
      <QueryClientProvider client={queryClient}>
        <Gnb />
        <Container>
          <InputField
            changeValue={changeValue}
            onChange={onChange}
            onKeyPress={clickKey}
            clickBtn={clickBtn}
          />
          <br />
          <ResultField
            inputValue={inputValue}
            setInputValue={setInputValue}
            clickRepo={clickRepo}
          />
        </Container>
        <RepoDetail detailContent={detailContent} />
      </QueryClientProvider>
    </MainWrap>
  );
};

export const MainWrap = styled.div`
  display: flex;
`;

const Container = styled.section`
  width: 100%;
  max-width: 680px;
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 35px 0px;
`;

export default Main;
