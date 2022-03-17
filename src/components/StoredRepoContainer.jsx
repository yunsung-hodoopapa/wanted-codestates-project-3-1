import React, { useState } from 'react';
import List from './List';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useIssueResults } from '../util/axios';
import PropTypes from 'prop-types';

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

const StoredRepoContainer = ({ getSearchIssue }) => {
  const storeData = useSelector(state => state.data.store);
  const [state, setState] = useState([]);
  const { data, error, isFetching, isPreviousData, status } = useIssueResults(
    state[0],
    state[1],
  );
  const searchIssue = (owner_id, owner_name) => {
    getSearchIssue(owner_id, owner_name);
    // setState([owner_id, owner_name]);
  };
  console.log(data);
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
