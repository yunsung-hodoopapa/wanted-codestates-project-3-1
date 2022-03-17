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
  // const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const queryClient = new QueryClient();

  const onChangeInput = useCallback(
    e => {
      debounce(setInputValue(e.target.value), 500);
    },
    [inputValue],
  );

  return (
    <MainWrap>
      <QueryClientProvider client={queryClient}>
        <Gnb />
        <Container>
          <InputField onChangeInput={onChangeInput} inputValue={inputValue} />
          <br />
          <ResultField inputValue={inputValue} setInputValue={setInputValue} />
        </Container>
        <RepoDetail />
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
