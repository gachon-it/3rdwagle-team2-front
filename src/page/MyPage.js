import React from 'react';
import './MyPage.css';
import MyPageSetInfo from './MyPageComponent/MyPageSetInfo';
import MyPageProfile from './MyPageComponent/MyPageProfile';

const MyPage = () => {
  return (
    <div>
      <MyPageProfile />
      <MyPageSetInfo />
    </div>
  );
};

export default MyPage;