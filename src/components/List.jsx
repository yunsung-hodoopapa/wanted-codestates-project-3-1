import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteRepo, storeRepo, notify } from '../redux/actionTypes';
import NotificationMessage from './NotificationMessage';

const List = ({ type = 'repo', item, clickHandle, searchIssue }) => {
  const dispatch = useDispatch();
  let itemId, repoName, htmlUrl, imgUrl, title, text, date;
  let owner_id, owner_name;

  const storedData = useSelector(state => state.data.store);

  if (type === 'issue') {
    const issue = item;
  } else if (type === 'stored') {
    itemId = item.id;
    imgUrl = item.avatar_url;
    title = item.full_name;
    text = item.description;
    owner_id = item.owner_id;
    owner_name = item.name;
    date = item.updated_at;
  } else if (type === 'repo') {
    itemId = item.id;
    imgUrl = item.owner.avatar_url;
    title = item.full_name;
    text = item.description;
    owner_id = item.name;
    owner_name = item.owner.login;
    date = item.updated_at;
  }

  const detailData = {
    id: itemId,
    full_name: title,
    description: text,
    updated_at: date,
    avatar_url: imgUrl,
  };

  const onClickEvent = () => {
    if (type === 'repo') {
      clickHandle(detailData);
    } else if (type === 'stored') {
      searchIssue(owner_id, owner_name);
    }
  };

  const saveRepo = () => {
    if (isSave(itemId)) return;
    if (storedData.length >= 4) {
      dispatch(notify('repository 저장 개수를 초과했습니다.', 1500));
    } else {
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
      dispatch(notify('repository를 저장소에 저장했습니다.', 1500));
    }
  };

  const removeRepo = () => {
    dispatch(deleteRepo(itemId));
  };

  const isSave = id => {
    return storedData.some(data => {
      if (data.id === id) {
        return true;
      }
    });
  };

  return (
    <Box type={type}>
      <Content onClick={onClickEvent}>
        <img src={imgUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
          <span>updated_at {date.split('T')[0]}</span>
        </div>
      </Content>
      <Option>
        {type === 'repo' ? (
          <button
            onClick={saveRepo}
            className={isSave(itemId) ? 'registered' : null}
          >
            저 장
          </button>
        ) : null}
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
  width: 100%;
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
    cursor: default;
    &:hover {
      color: #8b8c93;
      background-color: #d4d5dd;
    }
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
