import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserFeed from '../components/SNS/User/UserFeed';

function UserFeedPage() {
  const [userInfo, setUserInfo] = useState([]);
  const params = useParams();
  // const pageUserId = localStorage.getItem('userId');
  const token = localStorage.getItem('accessToken');

  const myConfig = {
    withCredentials: true,
    headers: {
      Authorization: token,
    },
  };

  useEffect(() => {
    const getFeed = async () => {
      const res = await axios.get(
        `http://ec2-43-200-54-216.ap-northeast-2.compute.amazonaws.com:8080/api/posts/${params.pageUserId}`,
        myConfig,
      );
      const data = await res.data.member;
      setUserInfo(data);
      console.log(data);
    };
    getFeed();
  }, []);

  return (
    <div>
      <UserFeed userInfo={userInfo} />
    </div>
  );
}

export default UserFeedPage;
