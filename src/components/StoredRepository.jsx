import React from 'react';
import styled from 'styled-components';

const RepoConatiner = styled.div`
  // 위치 설정
  display: grid;
  grid-template-columns: 2fr 7fr 1fr;
  // 박스 크기
  width: 470px;
  height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: white;

  // 테두리
  border-radius: 16px;
  box-shadow: 2px 2px 10px 1px rgba(160, 160, 160, 0.4);
`;

const RepoContent = styled.div`
  margin: 10px;
`;
const RepoProfile = styled.div`
  /* border: 1px solid black; */
  background-color: #ddd;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin: 0 auto;
  margin-top: 20px;
`;

const RepoTitle = styled.h3`
  color: #3d57c2;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;
const RepoDescription = styled.p`
  color: #666666;
  font-size: 17px;
  margin-bottom: 8px;
`;

const RepoUpdated = styled.p`
  color: #8b8c93;
  font-size: 14px;
  margin-bottom: 15px;
`;

const X = styled.div`
  text-align: right;
  margin: 10px;
  font-size: 25px;
  color: #666666;
`;

const StoredRepository = () => {
  return (
    <RepoConatiner>
      <RepoProfile />
      <RepoContent>
        <RepoTitle>Repo name</RepoTitle>
        <RepoDescription>
          {'repo description repo description'.slice(0, 33)}...
        </RepoDescription>
        {/* 33자 */}
        <RepoUpdated>Updated at 2022-01-18</RepoUpdated>
      </RepoContent>
      <X>
        <span style={{ cursor: 'pointer' }}>&times;</span>
      </X>
    </RepoConatiner>
  );
};

export default StoredRepository;
