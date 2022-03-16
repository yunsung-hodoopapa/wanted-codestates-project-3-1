import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = ({ type = 'stored', item }) => {
  let itemId, repoName, htmlUrl, imgUrl, name, text, date;

  if (type === 'issue') {
    const issue = item;
  } else {
    const { id, full_name, owner, description, updated_at } = item;
    [itemId, name, imgUrl, text, date] = [
      id,
      full_name,
      owner.avatar_url,
      description,
      updated_at,
    ];
  }

  const onClickEvent = () => {
    if (type === 'issue') {
      location.replace(htmlUrl);
    }
  };

  const saveRepo = () => {
    console.log('saveRepo');
  };

  const removeRepo = () => {
    console.log('removeRepos');
  };

  return (
    <Box onClick={onClickEvent}>
      <Content>
        <img src={imgUrl} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{text}</p>
          <span>{date}</span>
        </div>
      </Content>
      <Option>
        {type === 'repo' ? <button onClick={saveRepo}>저장</button> : null}
        {type === 'issue' ? <p>{repoName}</p> : null}
        {type === 'stored' ? <i onClick={removeRepo}></i> : null}
      </Option>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 22px 50px;
  border-radius: 16px;
  background-color: #fff;
  transition: all 0.3s;
  :hover {
    filter: drop-shadow(2px 2px 12px rgba(84, 83, 133, 0.5));
  }
`;

const Content = styled.div`
  display: flex;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 25px 27px;
  }
  h3 {
    line-height: 1.5;
    font-size: 22px;
    font-weight: 600;
    color: #3d57c2;
  }
  p {
    font-size: 18px;
    width: 200px;
    color: #666;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  span {
    font-size: 15px;
    line-height: 1.5;
    color: #8b8c93;
  }
  > div {
    margin: 12px 0;
    padding-left: 5px;
  }
`;

const Option = styled.div`
  position: relative;
  //저장 버튼
  button {
    width: 123px;
    height: 100%;
    border: none;
    background-color: #7281d6;
    color: #fff;
    font-size: 18px;
    border-top-right-radius: 16px;
    border-end-end-radius: 16px;
    cursor: pointer;
  }
  .registered {
    color: #8b8c93;
    background-color: #d4d5dd;
  }
  //repoName
  p {
    width: 250px;
    margin-right: 29px;
    margin-top: 72px;
    color: #7281d6;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  //reopRemove
  i {
    display: block;
    padding: 13px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    ::after,
    ::before {
      display: block;
      position: absolute;
      right: 23px;
      width: 1px;
      height: 20px;
      background-color: #666;
      content: '';
    }
    ::after {
      transform: rotate(45deg);
    }
    ::before {
      transform: rotate(-45deg);
    }
  }
`;

List.propTypes = {
  type: PropTypes.string,
  item: PropTypes.object,
};

export default List;