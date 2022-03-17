import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Background = props => {
  return (
    <Container>
      <ContentsWrap>{props.children}</ContentsWrap>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  right: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 8em;
  width: 8rem;
  height: 100%;
  padding: 1rem;
  background-color: #EAECFD;
  border-radius: 10px;
  text-align: center;
  z-index: 1000;
`;

Background.propTypes = {
  children: PropTypes.node,
};

export default Background;
