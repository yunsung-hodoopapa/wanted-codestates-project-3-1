import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

const PaginationComponent = styled.div`
  position: relative;
  width: 220px;
  margin: 24px auto 0;
  ul {
    display: flex;
    margin: 0 auto;
    width: 180px;
    margin: 0 auto;
    justify-content: center;
    overflow: hidden;
    li {
      width: calc(100% / 5);
      button {
        width: 100%;
        padding: 7px 0;
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
  const [pageNum, setPageNum] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const pageNumbersArr = [];

  for (let i = 1; i <= Math.ceil(totalCount / postPerPage); i++) {
    pageNumbersArr.push(i);
  }

  const moveRightPageNum = () => {
    setPage(page + 5);
    setCurrentPage(currentPage + 1);
  };
  const moveLeftPageNum = () => {
    if (page > 5) {
      setPage(page - 5);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <PaginationComponent>
        <div>
          <button onClick={moveLeftPageNum} disabled={page === 1}>
            <AiOutlineDoubleLeft />
          </button>
          <button onClick={moveRightPageNum} disabled={isPreviousData}>
            <AiOutlineDoubleRight />
          </button>
        </div>
        <ul>
          {pageNumbersArr
            .slice(indexOfFirstPost, indexOfLastPost)
            .map((value, index) => (
              <li key={index}>
                <button
                  className={value === page ? 'active' : ''}
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
