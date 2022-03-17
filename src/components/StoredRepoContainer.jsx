import React from 'react';
import StoredRepository from './StoredRepository';
// import List from './List';
import styled from 'styled-components';
import List from './List';

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
  return (
    <Container>
      <Title>Stored Repository</Title>
      <StoredRepository />
      {/* <List /> */}
    </Container>
  );
};

export default StoredRepoContainer;
