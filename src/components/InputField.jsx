import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';

// eslint-disable-next-line react/prop-types
const InputField = ({ onChangeInput, inputValue }) => {
  return (
    <Wrapper>
      <InputFieldWrapper>
        <IconContainer>
          <BiSearchAlt2 size={20} />
        </IconContainer>
        <Div />
        <Input
          type="text"
          value={inputValue}
          onChange={onChangeInput}
          placeholder="레포를 찾아봅시다."
        />
      </InputFieldWrapper>
      <Button>search</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 660px;
  height: 45px;
  position: relative;
  background-color: #ffffff;
  border-radius: 42px;
  line-height: 25.6px;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
  line-height: 28.8px;
  width: 100%;
  max-width: 660px;
  padding: 20px 24px;
  font-weight: 400;
  font-size: 16px;
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;
`;

const Div = styled.div`
  padding-right: 12px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  cursor: text;
  font-size: 15px;
`;

const Button = styled.button`
  padding: 0 20px;
  cursor: pointer;
  border-width: 0;
  border-top-right-radius: 42px;
  border-bottom-right-radius: 42px;
  background-color: #3d57c2;
  color: #ffffff;
  font-size: 1rem;
  letter-spacing: 0.1ch;
`;

export default InputField;
