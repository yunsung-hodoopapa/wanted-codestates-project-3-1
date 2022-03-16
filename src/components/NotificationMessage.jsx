import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const MessageContainer = styled.div`
  // 위치
  position: absolute;
  right: 0;
  top: 32px;
  z-index: 999;

  // 박스 크기
  width: 336px;
  height: 80px;

  // 테두리
  background-color: white;
  border: ${props =>
    props.message === '내용입력'
      ? '2px solid #97a1ff'
      : '2px solid red'}; // 바뀐다
  border-radius: 5px;
  box-shadow: 1px 1px 10px 2px;

  // 글씨
  color: ${props =>
    props.message === '내용입력' ? '#97a1ff' : 'red'}; // 바뀐다
  font-size: 18px;
  font-weight: bold;

  // 글씨 위치
  line-height: 80px;
  text-align: center;
`;

const NotificationMessage = () => {
  const message = useSelector(state => state.notice.message);
  console.log(message);
  return (
    <div>
      {message.length === 0 ? null : (
        <MessageContainer message={message}>{message}</MessageContainer>
      )}
    </div>
  );
};

export default NotificationMessage;
