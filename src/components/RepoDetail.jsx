import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { storeRepo, notify } from '../redux/actionTypes';

const RepoDetail = ({ detailContent, isShow, setIsShow }) => {
  const { id, full_name, description, updated_at, avatar_url } = detailContent;
  const StoredData = useSelector(state => state.data.store);
  const dispatch = useDispatch();

  const saveRepo = () => {
    if (StoredData.length >= 4) {
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

  return (
    <>
      {isShow ? (
        <Wrapper>
          <CloseBtn
            onClick={() => {
              setIsShow(false);
            }}
          >
            <MdClose size={29} color={'#999'} />
          </CloseBtn>
          <ProfilePic img={avatar_url} />
          <RepoName>{full_name}</RepoName>
          <RepoDesc>{description}</RepoDesc>
          <RepoUpdated>Updated at {updated_at.split('T')[0]}</RepoUpdated>
          <SaveBtn onClick={saveRepo}>저 장</SaveBtn>
        </Wrapper>
      ) : null}
    </>
  );
};

const Wrapper = styled.nav`
  background-color: #fff;
  width: 100%;
  max-width: 460px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 22px;
  right: 28px;
  cursor: pointer;
`;

const ProfilePic = styled.div`
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150px;
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
  width: 340px;
  /* background-color: yellow; */
  text-align: center;
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  /* overflow: hidden; */
`;

const RepoDesc = styled.p`
  color: #666666;
  font-size: 18px;
  margin-bottom: 12px;
  /* background-color: pink; */
  text-align: center;
  margin: 0 24px 12px 24px;
  line-height: 1.2;
`;

const RepoUpdated = styled.p`
  color: var(--dark-gray);
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

RepoDetail.propTypes = {
  detailContent: PropTypes.object,
  isShow: PropTypes.bool,
  setIsShow: PropTypes.func,
};

export default RepoDetail;
