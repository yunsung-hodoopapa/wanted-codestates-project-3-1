import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import { useRepoResults } from '../util/axios';

// eslint-disable-next-line react/prop-types
const ResultField = ({ inputValue, setInputValue }) => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const { data, error, isPreviousData, isFetching, status, isLoading } =
    useRepoResults(inputValue, page);

  const onHandleList = name => {
    setInputValue(name);
  };

  console.log(data);


  const getDataByStatus = useCallback(() => {
    switch (status) {
      case 'loading':
        return <div>Loading</div>;
      case 'error':
        return <span>Error: {error.message}</span>;
      default:
        return (
          <>
            <div>
              <ResultHeader>추천 검색어</ResultHeader>
              {data.items?.map(item => {
                const { id, full_name, decription, updated_at, owner } = item;
                const { avatar_url } = owner;
                return (
                  <SearchedItem
                    key={id}
                    value={full_name}
                    onClick={() => onHandleList(item.name)}
                  >
                    {full_name}
                  </SearchedItem>
                );
              })}
            </div>
            <span>Current Page: {page}</span>
            <button
              onClick={() => setPage(old => Math.max(old - 1, 0))}
              disabled={page === 1}
            >
              Previous Page
            </button>
            <button
              onClick={() => {
                if (!isPreviousData) {
                  setPage(old => old + 1);
                }
              }}
              disabled={isPreviousData || !data}
            >
              NextPage
            </button>
            {isFetching ? <span>Loading...</span> : null}
          </>
        );
    }
  }, [status, isFetching]);

  return data ? <Wrapper>{getDataByStatus()}</Wrapper> : null;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 660px;
  background-color: #ffffff;
  border-radius: 42px;
  lint-height: 25.6px;
`;

const SearchedItem = styled.div`
  padding: 5px 0px 5px 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #efefef;
  list-style: none;
  &:hover {
    background: #cae9ff;
    color: #ffffff;
  }
  cursor: pointer;
`;

const ResultHeader = styled.span`
  font-size: 0.8rem;
  color: #3b3b3b;
`;

export default ResultField;
