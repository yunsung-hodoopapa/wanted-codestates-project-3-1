import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

const PaginationComponent = styled.div`
  position: relative;
  width: 220px;
  margin: 0 auto;
  ul {
    display: flex;
    margin: 0 auto;
    width: 180px;
    margin: 0 auto;
    justify-content: center;
    overflow: hidden;
    li {
      button {
        padding: 4px 7px;
        margin: 0 2px;
        background-color: transparent;
        border: 1px solid #ccc;
        box-sizing: border-box;
        color: gray;
        cursor: pointer;
        &.active {
          background-color: #6640ff;
          color: white;
          border: 1px solid #6640ff;
        }
      }
    }
  }
  div {
    button {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 50%;
      margin-top: -11px;
      border: 1px solid #ccc;
      background-color: transparent;
      color: gray;
      cursor: pointer;
      &:nth-child(1) {
        left: 0;
      }
      &:nth-child(2) {
        right: 0;
      }
      svg {
        vertical-align: sub;
      }
    }
  }
`;

const Pagination = ({ page, setPage, totalCount, isPreviousData }) => {
  const [totalPage, setTotalPage] = useState([]);
  const [fivePage, setFivePage] = useState(0);
  const totalPageCount = Math.ceil(totalCount / 7);

  useEffect(() => {
    let paginationNumber = [];
    for (let i = 1; i <= totalPageCount; i++) {
      paginationNumber.push(i);
    }
    setTotalPage(paginationNumber);
  }, []);

  const handlePageCount = bool => {
    if (bool) {
      setFivePage(fivePage - 1);
    } else {
      setFivePage(fivePage + 1);
    }
    setPage(fivePage);
  };

  useEffect(() => {}, [page]);

  return (
    <>
      <div>{page}</div>
      <PaginationComponent>
        <div>
          <button onClick={() => handlePageCount(true)} disabled={page === 1}>
            <AiOutlineDoubleLeft />
          </button>
          <button
            onClick={() => handlePageCount(false)}
            disabled={isPreviousData}
          >
            <AiOutlineDoubleRight />
          </button>
        </div>
        <ul>
          {totalPage
            .slice(fivePage * 5, fivePage * 5 + 5)
            .map((value, index) => (
              <li key={index}>
                <button
                  className={page === value ? 'active' : ''}
                  onClick={() => setPage(value)}
                >
                  {value}
                </button>
              </li>
            ))}
        </ul>
      </PaginationComponent>
    </>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  totalCount: PropTypes.number,
  isPreviousData: PropTypes.bool,
};

export default Pagination;
