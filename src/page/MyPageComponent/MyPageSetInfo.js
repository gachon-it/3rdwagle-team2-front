import React, { useState, useEffect } from 'react';
import './MyPageSetInfo.css';

const MyPageSetInfo = ({ loggedInUser, onUpdateUser }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState(loggedInUser?.id || '');
  const [password, setPassword] = useState(loggedInUser?.password || '');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dormitory, setDormitory] = useState('');
  const [email, setEmail] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('010');
  const [phone, setPhone] = useState('');
  const [phone_1, setPhone_1] = useState('');

  useEffect(() => {
    const savedInfo = JSON.parse(localStorage.getItem('userInfo'));
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (savedInfo) {
      setName(savedInfo.name);
      setDormitory(savedInfo.dormitory);
      setEmail(savedInfo.email);
      setPhonePrefix(savedInfo.phonePrefix);
      setPhone(savedInfo.phone);
      setPhone_1(savedInfo.phone_1);
    }
    
    if (loggedInUser) {
      setId(loggedInUser.id);
      setPassword(loggedInUser.password);
    }
  }, []);

  const confirm = () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      document.getElementById('confirmPassword').focus();
    } else {
      alert("비밀번호가 일치합니다.");
    }
  }

  const handleSave = () => {
    const userInfo = { name, id, password, dormitory, email, phonePrefix, phone, phone_1 };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('loggedInUser', JSON.stringify({ id, password }));
    localStorage.setItem('userName', name);
    onUpdateUser({ id, password });
    alert("정보가 저장되었습니다.");
  };

  return(
    <div className="mypage-container"> 
      <fieldset>
        <form onSubmit={(e) => e.preventDefault()}>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor="name">이름</label></td>
                <td><input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /></td>
              </tr>
              <tr>
                <td><label htmlFor="id">아이디</label></td>
                <td><input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} /></td>
              </tr>
              <tr>
                <td><label htmlFor="password">비밀번호</label></td>
                <td><input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
              </tr>    
              <tr>
                <td><label htmlFor="confirmPassword">비밀번호 확인</label></td>
                <td>
                  <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  <button onClick={confirm}>확인</button>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="dormitory">기숙사</label></td>
                <td><input type="text" id="dormitory" value={dormitory} onChange={(e) => setDormitory(e.target.value)} /></td>
              </tr>
              <tr>
                <td><label htmlFor="email">이메일</label></td>
                <td><input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
              </tr>
              <tr>
                <td><label htmlFor="phone">전화번호</label></td>
                <td>
                  <select id="phonePrefix" value={phonePrefix} onChange={(e) => setPhonePrefix(e.target.value)}>
                    <option value="010">010</option>
                    <option value="02">02</option>
                  </select>
                  - <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength="4" style={{width: "50px"}} />
                  - <input type="tel" id="phone_1" value={phone_1} onChange={(e) => setPhone_1(e.target.value)} maxLength="4" style={{width: "50px"}} />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleSave}>저장</button>
        </form>
      </fieldset>
    </div>
  );
};

export default MyPageSetInfo;