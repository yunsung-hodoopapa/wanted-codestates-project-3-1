import React from 'react';
import StoredRepository from './StoredRepository';
import styled from 'styled-components';

const Container = styled.div`
  margin: 50px;
`;

const Title = styled.div`
  font-size: 30px;
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
