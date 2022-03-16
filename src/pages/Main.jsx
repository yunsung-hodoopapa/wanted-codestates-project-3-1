import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import ResultField from '../components/ResultField';
import Gnb from '../components/Gnb';
import { debounce } from '../util/index';
import { QueryClientProvider, QueryClient } from 'react-query';
import Pagination from '../components/Pagination';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const queryClient = new QueryClient();

  const onChangeInput = useCallback(
    e => {
      debounce(setInputValue(e.target.value), 1000);
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
          <Pagination />
        </Container>
      </QueryClientProvider>
    </MainWrap>
  );
};

export const MainWrap = styled.div`
  display: flex;
`;
const Container = styled.section`
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0px;
`;

export default Main;
