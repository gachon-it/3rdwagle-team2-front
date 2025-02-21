import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './page/HomePage';
import GroupBuyPage from './page/GroupBuyPage';
import DeliveryPage from './page/DeliveryPage';
import BenefitsPage from './page/BenefitsPage';
import MyPage from './page/MyPage';
import LoginPage from './page/Loginpage';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <GroupBuyPage/> */}
      {/* <GroupBuyDetailPage/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/group-buy" element={<GroupBuyPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
