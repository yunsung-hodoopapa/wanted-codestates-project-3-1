import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Gnb from '../components/Gnb';
import { MainWrap } from './Main';
import { useQueryClient } from 'react-query';
import StoredRepoContainer from '../components/StoredRepoContainer';
import List from '../components/List';
import { useIssueResults } from '../util/axios';
import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import NotificationMessage from '../components/NotificationMessage';

const Issue = () => {
  const queryClient = useQueryClient();
  const stored = useSelector(state => state.data.store);
  const [state, setState] = useState([]);
  const { data, error, isFetching, isPreviousData, status } = useIssueResults(
    state[1],
    state[0],
  );
  console.log(data);
  const getSearchIssue = (owner_id, owner_name) => {
    setState([owner_id, owner_name]);
  };
  const getIssueByStatus = useCallback(() => {
    switch (status) {
      case 'loading':
        return <div>Loading</div>;
      case 'error':
        return <span>Error: {error.message}</span>;
      default:
        return (
          <>
            {/* {data
              ? data.map(item => (
                  // <List type={'issue'} key={item.id} item={item} />
                ))
              : null} */}
            {/* {data.total_count ? (
              <Pagination
                page={page}
                setPage={setPage}
                totalCount={data.total_count}
                isPreviousData={isPreviousData}
              />
            ) : null} */}
            {isFetching ? <span>Loading...</span> : null}
          </>
        );
    }
  }, [status, isFetching]);

  return (
    <MainWrap>
      <Gnb />
      <Container>{data ? <>{getIssueByStatus()}</> : null}</Container>
      <StoredRepoContainer
        getSearchIssue={(owner_id, owner_name) =>
          getSearchIssue(owner_id, owner_name)
        }
      />
      <NotificationMessage />
    </MainWrap>
  );
};

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

export default Issue;
