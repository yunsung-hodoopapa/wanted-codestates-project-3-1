import React, { useState } from 'react';
import List from './List';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Container = styled.div`
  /* margin: 50px; */
  background-color: white;
  width: 500px;
  min-height: 100vh;
  overflow: hidden;
`;

const Title = styled.div`
  margin: 30px;
  font-size: 22px;
  font-weight: bold;
`;

const StoredRepoContainer = ({ getSearchIssue }) => {
  const storeData = useSelector(state => state.data.store);

  const searchIssue = (owner_id, owner_name) => {
    getSearchIssue(owner_id, owner_name);
  };

  return (
    <Container>
      <Title>Stored Repository</Title>
      {storeData.map((obj, idx) => {
        return (
          <List
            key={idx}
            idx={idx}
            item={obj}
            type="stored"
            searchIssue={searchIssue}
          />
        );
      })}
      {/* <List /> */}
    </Container>
  );
};
StoredRepoContainer.propTypes = {
  getSearchIssue: PropTypes.func,
};

export default StoredRepoContainer;
