import React, { useState } from 'react';
import StoredRepository from './StoredRepository';
import List from './List';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useIssueResults } from '../util/axios';
const Container = styled.div`
  /* margin: 50px; */
  background-color: white;
  width: 500px;
  min-height: 100vh;
`;

const Title = styled.div`
  margin: 50px;
  font-size: 22px;
  font-weight: bold;
`;

const StoredRepoContainer = () => {
  const data = useSelector(state => state.data.store);
  const [state, setState] = useState([]);
  const { realData, error, isFetching, isPreviousData, status } =
    useIssueResults(state[1], state[0]);
  const searchIssue = (owner, repoName) => {
    setState([owner, repoName]);
  };
  console.log(realData);
  return (
    <Container>
      <Title>Stored Repository</Title>
      {data.map((obj, idx) => {
        return (
          <List key={idx} item={obj} type="stored" searchIssue={searchIssue} />
        );
      })}
      {/* <List /> */}
    </Container>
  );
};

export default StoredRepoContainer;
