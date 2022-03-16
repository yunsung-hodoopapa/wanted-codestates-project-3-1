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
  border: 1px solid silver;
  border-radius: 20px;
  box-shadow: 1px 3px 7px 3px silver;
`;

const RepoContent = styled.div`
  margin: 10px;
`;
const RepoProfile = styled.img`
  /* border: 1px solid black; */
  width: 50px;
  height: 50px;
  border-radius: 100px;
  margin: 0 auto;
  margin-top: 20px;
`;

const RepoTitle = styled.div`
  color: #3d57c2;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 15px;
`;
const RepoDescription = styled.div`
  color: #666666;
  font-size: 18px;
  margin-bottom: 15px;
`;

const RepoUpdated = styled.div`
  color: #8b8c93;
  font-size: 15px;
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
