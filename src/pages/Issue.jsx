import React, { useState, useCallback } from 'react';
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
import Background from '../components/loadingSpinner/Background';
import Spinner from '../components/loadingSpinner/Spinner';

const Issue = () => {
  const queryClient = useQueryClient();
  const stored = useSelector(state => state.data.store);
  const [state, setState] = useState([]);
  const [issuePage, setIssuePage] = useState(1);
  const { data, error, isFetching, isPreviousData, status, isLoading } =
    useIssueResults(state[1], state[0], issuePage);
  const getSearchIssue = (owner_id, owner_name) => {
    setState([owner_id, owner_name]);
  };
  const getIssueByStatus = useCallback(() => {
    switch (status) {
      case 'loading':
        return (
          <Background>
            <Spinner />
          </Background>
        );
      case 'error':
        return <span>Error: {error.message}</span>;
      default:
        return (
          <>
            {data
              ? data.map(item => {
                  return (
                    <List
                      type={'issue'}
                      key={item.id}
                      item={item}
                      repoNameProp={state}
                    />
                  );
                })
              : null}
            {data ? (
              <Pagination
                page={issuePage}
                setPage={setIssuePage}
                totalCount={data.length}
                isPreviousData={isPreviousData}
              />
            ) : null}
            {isFetching ? (
              <Background>
                <Spinner />
              </Background>
            ) : null}
            {isLoading ? (
              <Background>
                <Spinner />
              </Background>
            ) : null}
          </>
        );
    }
  }, [status, isFetching, isLoading]);

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
