import React, { useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
const InputField = ({ onChangeInput, inputValue }) => {
  return (
    <Wrapper>
      <Input
        type="text"
        value={inputValue}
        onChange={onChangeInput}
        placeholder="search"
      />
      <Button>
        <MdSearch size={25} color="black" />
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 7px 10px 7px 30px;
  align-items: center;
  border-radius: 20px;
  background-color: #ffffff;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 80%;
  font-size: 1rem;
`;

const Button = styled.button`
  cursor: pointer;
  border-width: 0;
  color: #ffffff;
  background-color: transparent;
`;

export default InputField;
