import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import ResultField from '../components/ResultField';
import Gnb from '../components/Gnb';
import List from '../components/List';
import RepoDetail from '../components/RepoDetail';
import { getRepository } from '../util/axios';
import { debounce } from '../util/index';
import { QueryClientProvider, QueryClient } from 'react-query';
import Pagination from '../components/Pagination';

const Main = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const queryClient = new QueryClient();

  const onChangeInput = useCallback(
    e => {
      debounce(setInputValue(e.target.value), 1000);
    },
    [inputValue],
  );

  useEffect(() => {
    const axios = async () => {
      const items = await getRepository('nam', 1);
      setItems(items);
    };
    axios();
  }, [inputValue]);

  return (
    <MainWrap>
      <QueryClientProvider client={queryClient}>
        <Gnb />
        <Container>
          <InputField onChangeInput={onChangeInput} inputValue={inputValue} />
          <br />
          <ResultField inputValue={inputValue} setInputValue={setInputValue} />
          {items.map(item => (
            <List key={item.id} item={item} type="repo" />
          ))}
          <Pagination />
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
