import React, { useState } from 'react';
import List from './List';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Container = styled.div`
  background-color: white;
  width: 440px;
  min-height: 100vh;
  overflow: hidden;
  padding: 30px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
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
          <List key={idx} item={obj} type="stored" searchIssue={searchIssue} />
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
