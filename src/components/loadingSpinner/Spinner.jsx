import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <FlexBox>
      <ScaleLoader
        size={40}
        height="40px"
        width="12px"
        color="#7281D6"
        radius="8px"
      />
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Spinner;
