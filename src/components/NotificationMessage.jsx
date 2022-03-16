import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  // 박스 크기
  width: 336px;
  height: 80px;

  // 테두리
  border: 2px solid #97a1ff;
  border-radius: 5px;
  box-shadow: 1px 1px 10px 2px;

  // 글씨
  color: #97a1ff;
  font-size: 18px;
  font-weight: bold;

  // 글씨 위치
  line-height: 80px;
  text-align: center;
`;

const NotificationMessage = () => {
  return (
    <div>
      <MessageContainer>repository를 저장소에 저장했습니다.</MessageContainer>
    </div>
  );
};

export default NotificationMessage;
