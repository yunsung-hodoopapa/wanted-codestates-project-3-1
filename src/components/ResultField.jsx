import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import { useRepoResults } from '../util/axios';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

const ResultField = ({ inputValue, setInputValue, clickRepo }) => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const { data, error, isFetching, isPreviousData, status } = useRepoResults(
    inputValue,
    page,
  );

  const onHandleList = name => {
    setInputValue(name);
  };

  const getDataByStatus = useCallback(() => {
    switch (status) {
      case 'loading':
        return <div>Loading</div>;
      case 'error':
        return <span>Error: {error.message}</span>;
      default:
        return (
          <>
            {data
              ? data.items?.map(item => {
                  const { id, full_name, description, updated_at, owner } =
                    item;
                  const { avatar_url } = owner;
                  const detailData = {
                    id,
                    full_name,
                    description,
                    updated_at,
                    owner,
                    avatar_url,
                  };
                  return (
                    <Box key={id} onClick={() => clickRepo(detailData)}>
                      <Content>
                        <img src={avatar_url} alt={name} />
                        <div>
                          <h3>{full_name}</h3>
                          <p>{description}</p>
                          <span>{updated_at}</span>
                        </div>
                      </Content>
                      <Option>
                        <button>저 장</button>
                      </Option>
                    </Box>
                  );
                })
              : null}
            {data.total_count ? (
              <Pagination
                page={page}
                setPage={setPage}
                totalCount={data.total_count}
                isPreviousData={isPreviousData}
              />
            ) : null}
            {isFetching ? <span>Loading...</span> : null}
          </>
        );
    }
  }, [status, isFetching]);

  return data ? <>{getDataByStatus()}</> : null;
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 11px auto;
  border-radius: 16px;
  background-color: #fff;
  transition: all 0.3s;
  :hover {
    filter: ${props =>
      props.type !== 'stored'
        ? 'drop-shadow(2px 2px 10px rgba(84, 83, 133, 0.3))'
        : 'none'};
  }

  box-shadow: ${props =>
    props.type === 'stored'
      ? '2px 2px 10px 1px rgba(160, 160, 160, 0.4)'
      : 'none'};
`;

const Content = styled.div`
  display: flex;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 25px 27px;
  }
  h3 {
    line-height: 1.5;
    font-size: 20px;
    font-weight: 600;
    color: var(--main-blue);
  }
  p {
    font-size: 16px;
    width: 300px;
    color: #666;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  span {
    font-size: 14px;
    line-height: 1.5;
    color: #8b8c93;
  }
  > div {
    margin: 12px 0;
    padding-left: 5px;
  }
`;

const Option = styled.div`
  position: relative;
  //저장 버튼
  button {
    width: 100px;
    height: 100%;
    border: none;
    background-color: var(--sub-blue);
    color: #f3f3f3;
    font-size: 16px;
    font-weight: 500;
    border-top-right-radius: 16px;
    border-end-end-radius: 16px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: var(--main-blue);
      color: #fff;
    }
  }
  .registered {
    color: #8b8c93;
    background-color: #d4d5dd;
  }
  //repoName
  p {
    width: 250px;
    margin-right: 29px;
    margin-top: 72px;
    color: #7281d6;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  //reopRemove
  i {
    display: block;
    padding: 13px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    ::after,
    ::before {
      display: block;
      position: absolute;
      right: 23px;
      width: 1px;
      height: 20px;
      background-color: #666;
      content: '';
    }
    ::after {
      transform: rotate(45deg);
    }
    ::before {
      transform: rotate(-45deg);
    }
  }
`;

ResultField.propTypes = {
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  clickRepo: PropTypes.func,
};

export default ResultField;
