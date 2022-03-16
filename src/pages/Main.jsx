import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import ResultField from '../components/ResultField';
import { debounce } from '../util/index';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const Main = () => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = useCallback(
    e => {
      debounce(setInputValue(e.target.value), 1000);
    },
    [inputValue],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <InputField onChangeInput={onChangeInput} inputValue={inputValue} />
        <br />
        <ResultField inputValue={inputValue} setInputValue={setInputValue} />
      </Container>
    </QueryClientProvider>
  );
};

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
