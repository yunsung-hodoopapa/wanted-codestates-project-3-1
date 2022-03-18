import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteRepo, storeRepo, notify } from '../redux/actionTypes';
import { MdClose } from 'react-icons/md';

const List = ({
  type = 'repo',
  item,
  clickHandle,
  searchIssue,
  repoNameProp,
  idx,
}) => {
  const dispatch = useDispatch();
  let itemId, repoName, htmlUrl, imgUrl, title, text, date;
  let owner_id, owner_name;

  const storedData = useSelector(state => state.data.store);

  if (type === 'issue') {
    htmlUrl = item.html_url;
    imgUrl = item.user.avatar_url;
    title = item.title;
    text = item.user.login;
    date = item.updated_at;
    repoName = repoNameProp;
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
    owner_id,
    name: owner_name,
    full_name: title,
    description: text,
    updated_at: date,
    avatar_url: imgUrl,
  };

  useEffect(() => {
    if (type === 'stored' && idx === 0) searchIssue(owner_id, owner_name);
  }, []);

  const onClickEvent = () => {
    if (type === 'repo') {
      clickHandle(detailData);
    } else if (type === 'stored') {
      searchIssue(owner_id, owner_name);
    }
  };

  const boxClick = () => {
    if (type === 'issue') {
      location.replace(htmlUrl);
    }
  };

  const saveRepo = () => {
    if (isSave(itemId)) return;
    if (storedData.length >= 4) {
      dispatch(notify('repository 저장 개수를 초과했습니다.', 3000));
    } else {
      dispatch(storeRepo(detailData));
      dispatch(notify('repository를 저장소에 저장했습니다.', 3000));
    }
  };

  const removeRepo = () => {
    dispatch(deleteRepo(itemId));
    dispatch(notify('삭제 되었습니다.', 3000));
  };

  const isSave = id => {
    return storedData.some(data => {
      if (data.id === id) {
        return true;
      }
    });
  };

  return (
    <Box onClick={boxClick} type={type}>
      <Content onClick={onClickEvent}>
        <img src={imgUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
          <span>Updated at {date.split('T')[0]}</span>
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
        {type === 'issue' ? <p>{repoName[1] + '/' + repoName[0]}</p> : null}
        {type === 'stored' ? (
          <i onClick={removeRepo}>
            <MdClose size={23} color={'#999'} />
          </i>
        ) : null}
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
        : 'drop-shadow(2px 2px 10px rgba(84, 83, 133, 0.3))'};
  }

  box-shadow: ${props =>
    props.type === 'stored'
      ? '2px 2px 10px 1px rgba(160, 160, 160, 0.4)'
      : 'none'};
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
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
    width: 360px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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
    position: absolute;
    text-align: right;
    bottom: 12px;
    right: 26px;
    color: var(--sub-blue);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  //reopRemove
  i {
    position: absolute;
    top: 10px;
    right: 10px;
    display: block;
    cursor: pointer;
  }
`;

List.propTypes = {
  type: PropTypes.string,
  item: PropTypes.object,
  clickHandle: PropTypes.func,
  searchIssue: PropTypes.func,
  repoNameProp: PropTypes.array,
  idx: PropTypes.number,
};

export default List;
