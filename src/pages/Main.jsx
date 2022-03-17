import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import ResultField from '../components/ResultField';
import Gnb from '../components/Gnb';
import List from '../components/List';
import RepoDetail from '../components/RepoDetail';
import Pagination from '../components/Pagination';

const Main = () => {
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

  const clickRepo = detailContent => {
    setDetailContent(detailContent);
  };

  return (
    <MainWrap>
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
