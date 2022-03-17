import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Gnb from '../components/Gnb';
import { MainWrap } from './Main';
import { useQueryClient } from 'react-query';
import StoredRepoContainer from '../components/StoredRepoContainer';
import StoredRepository from '../components/StoredRepository';
import List from '../components/List';
import { useIssueResults } from '../util/axios';
import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination';

const Issue = () => {
  const [param, setParam] = useState('');
  const queryClient = useQueryClient();
  const stored = useSelector(state => state.data.store);

  const { data, error, isFetching, isPreviousData, status } = useIssueResults();

  const getIssueByStatus = useCallback(() => {
    switch (status) {
      case 'loading':
        return <div>Loading</div>;
      case 'error':
        return <span>Error: {error.message}</span>;
      default:
        return (
          <>
            {data
              ? data.map(item => (
                  <List type={'issue'} key={item.id} item={item} />
                ))
              : null}
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
      <StoredRepoContainer />
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
