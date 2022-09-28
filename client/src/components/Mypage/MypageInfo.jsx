import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import * as S from './MypageInfoStyle';
import Profile from '../../assets/profile.png';

function MypageInfo() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  // const userInfo = localStorage.getItem('userId');

  // useEffect(() => {
  //   const mypageInfo = async () => {
  //     const res = await axios.get(
  //       `http://ec2-43-200-54-216.ap-northeast-2.compute.amazonaws.com:8080/api/users/${userInfo}`,
  //     );
  //     console.log(res.data);
  //     setUser(res.data);
  //   };
  //   mypageInfo();
  // });

  return (
    <S.MyInfoLayout>
      <h1>나의 계정</h1>
      <S.MyInfoBox>
        <h3>회원 정보</h3>
        <S.MyInfoFlex>
          <img src={Profile} alt="" />
          <div>
            <p>이름: </p>
            <p>봉사자: </p>
            <p>마이버디: </p>
          </div>
        </S.MyInfoFlex>
      </S.MyInfoBox>
      <S.MobileButton onClick={() => navigate('/mypage/:userId')}>
        회원정보 수정
      </S.MobileButton>
    </S.MyInfoLayout>
  );
}

export default MypageInfo;
