import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteRepo, storeRepo } from '../redux/actionTypes';

const List = ({ type = 'repo', item, clickHandle, searchIssue }) => {
  const dispatch = useDispatch();
  let itemId, repoName, htmlUrl, imgUrl, title, text, date;
  let owner_id, owner_name;

  let owner;
  if (type === 'issue') {
    const issue = item;
  } else if (type === 'stored') {
    const {
      id,
      full_name,
      description,
      updated_at,
      name,
      avatar_url,
      owner_id,
    } = item;
    [itemId, title, imgUrl, text, date, owner, owner_name] = [
      id,
      full_name,
      avatar_url,
      description,
      updated_at,
      name,
      owner_id,
    ];
  } else {
    const { id, full_name, owner, description, updated_at, name } = item;
    [itemId, title, imgUrl, text, date, owner_id, owner_name] = [
      id,
      full_name,
      owner.avatar_url,
      description,
      updated_at,
      owner.login,
      name,
    ];
  }

  const detailData = {
    id: itemId,
    full_name: repoName,
    description: text,
    updated_at: date,
    avatar_url: imgUrl,
  };

  const onClickEvent = () => {
    if (type === 'repo') {
      clickHandle(detailData);
    } else if (type === 'stored') {
      searchIssue(owner, owner_name);
    }
  };

  const saveRepo = () => {
    dispatch(
      storeRepo({
        id: itemId,
        owner_id,
        name: owner_name,
        full_name: title,
        description: text,
        updated_at: date,
        avatar_url: imgUrl,
      }),
    );
  };

  const removeRepo = () => {
    dispatch(deleteRepo(itemId));
  };

  return (
    <Box type={type}>
      <Content onClick={onClickEvent}>
        <img src={imgUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
          <span>{date}</span>
        </div>
      </Content>
      <Option>
        {type === 'repo' ? <button onClick={saveRepo}>저 장</button> : null}
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
  margin: 11px auto;
  border-radius: 16px;
  background-color: #fff;
  transition: all 0.3s;
  :hover {
    filter: ${props =>
      props.type !== 'stored'
        ? 'drop-shadow(2px 2px 10px rgba(84, 83, 133, 0.3))'
        : 'none'};
  }

  box-shadow: ${props =>
    props.type === 'stored'
      ? '2px 2px 10px 1px rgba(160, 160, 160, 0.4)'
      : 'none'};
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
    font-size: 20px;
    font-weight: 600;
    color: var(--main-blue);
  }
  p {
    font-size: 16px;
    width: 300px;
    color: #666;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  span {
    font-size: 14px;
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
    width: 100px;
    height: 100%;
    border: none;
    background-color: var(--sub-blue);
    color: #f3f3f3;
    font-size: 16px;
    font-weight: 500;
    border-top-right-radius: 16px;
    border-end-end-radius: 16px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: var(--main-blue);
      color: #fff;
    }
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
  clickHandle: PropTypes.func,
  searchIssue: PropTypes.func,
};

export default List;
