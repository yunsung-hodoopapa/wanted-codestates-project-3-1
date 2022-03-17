import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const MessageContainer = styled.div`
  // 위치
  position: fixed;
  right: 0;
  top: ${props => props.index * '85'}px;
  z-index: 999;
  // 박스 크기
  width: 336px;
  height: 80px;

  // 테두리
  background-color: white;
  border: ${props =>
    props.message === 'repository를 저장소에 저장했습니다.'
      ? '2px solid #97a1ff'
      : '2px solid #CA3D3D'}; // 바뀐다
  border-radius: 5px;
  /* box-shadow: 1px 1px 3px 1px; */

  // 글씨
  color: ${props =>
    props.message === 'repository를 저장소에 저장했습니다.'
      ? '#97a1ff'
      : '#CA3D3D'}; // 바뀐다
  font-size: 18px;
  font-weight: bold;

  // 글씨 위치
  line-height: 80px;
  text-align: center;

  // 효과
  animation: moveToRight 5s;

  @keyframes moveToRight {
    25% {
      opacity: 1;
    }
    75% {
      opacity: 0.5;
    }
  }
`;

const NotificationMessage = () => {
  const message = useSelector(state => state.notice.message);
  console.log(message);
  return (
    <div>
      {message.map((el, index) => {
        return (
          <MessageContainer key={index} message={el} index={index}>
            {el}
          </MessageContainer>
        );
      })}
    </div>
  );
};

export default NotificationMessage;
