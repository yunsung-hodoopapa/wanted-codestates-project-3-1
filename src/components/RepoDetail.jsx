import React from 'react';
import styled from 'styled-components';

const RepoDetail = () => {
  return (
    <Wrapper>
      <ProfilePic />
      <RepoName>user_name/selected_repo_name=fullname</RepoName>
      <RepoDesc>repo description repo description</RepoDesc>
      <RepoUpdated>Updated on 2022-01-18</RepoUpdated>
      <SaveBtn>저 장</SaveBtn>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: #fff;
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfilePic = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ddd;
  margin-top: 12vh;
  margin-bottom: 40px;
`;

const RepoName = styled.p`
  font-size: 24px;
  color: var(--main-blue);
  font-weight: 500;
  margin-bottom: 40px;
  width: 400px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const RepoDesc = styled.p`
  color: #666666;
  font-size: 20px;
  margin-bottom: 12px;
`;

const RepoUpdated = styled.p`
  color: #8b8c93;
  font-size: 16px;
  margin-bottom: 60px;
`;

const SaveBtn = styled.button`
  background-color: var(--main-blue);
  border: none;
  color: #f1f1f1;
  font-size: 18px;
  width: 160px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--sub-blue);
  }
`;
export default RepoDetail;
