import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PaginationComponent = styled.div`
  position: relative;
  width: 220px;
  margin: 0 auto;
  ul {
    display: flex;
    margin: 0 auto;
    width: 140px;
    margin: 0 auto;
    justify-content: space-around;
    li {
      button {
        padding: 4px 7px;
        background-color: transparent;
        border: 1px solid #ccc;
        box-sizing: border-box;
        color: gray;
        cursor: pointer;
        &:active {
          background-color: #6640ff;
          color: white;
          border: 1px solid #6640ff;
        }
      }
    }
  }
  div {
    button {
      width: 22px;
      height: 22px;
      position: absolute;
      top: 50%;
      margin-top: -11px;
      border: 1px solid #ccc;
      background-color: transparent;
      cursor: pointer;
      &:nth-child(1) {
        left: 0;
      }
      &:nth-child(2) {
        right: 0;
      }
    }
  }
`;

const Pagination = () => {
  return (
    <PaginationComponent>
      <div>
        <button>{'<'}</button>
        <button>{'>'}</button>
      </div>
      <ul>
        <li>
          <button>1</button>
        </li>
        <li>
          <button>2</button>
        </li>
        <li>
          <button>3</button>
        </li>
        <li>
          <button>4</button>
        </li>
        <li>
          <button>5</button>
        </li>
      </ul>
    </PaginationComponent>
  );
};

Pagination.propTypes = {};

export default Pagination;
