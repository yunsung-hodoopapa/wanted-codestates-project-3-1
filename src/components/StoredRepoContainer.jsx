import React from 'react';
import StoredRepository from './StoredRepository';
import styled from 'styled-components';
import List from './List';

const Container = styled.div`
  /* margin: 50px; */
  background-color: white;
  width: 570px;
  height: 800px;
`;

const Title = styled.div`
  margin: 50px;
  font-size: 30px;
  font-weight: bold;
`;

const StoredRepoContainer = () => {
  return (
    <Container>
      <Title>Stored Repository</Title>
      <StoredRepository />
    </Container>
  );
};

export default StoredRepoContainer;
