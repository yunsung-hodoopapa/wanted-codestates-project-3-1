import React from 'react';
import StoredRepository from './StoredRepository';
import List from './List';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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
  return (
    <Container>
      <Title>Stored Repository</Title>
      {data.map((obj, idx) => {
        return <List key={idx} item={obj} type="stored" />;
      })}
      {/* <List /> */}
    </Container>
  );
};

export default StoredRepoContainer;
