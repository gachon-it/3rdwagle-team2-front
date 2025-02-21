import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // ✅ axios 추가
import "./Signup.css";

const SignupPage = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [dormitory, setDormitory] = useState('');
    const [isLoading, setIsLoading] = useState(false); // 중복 요청 방지
    const navigate = useNavigate();

    // 입력 필드 포커스 참조
    const userIdRef = useRef(null);
    const passwordRef = useRef(null);
    const userNameRef = useRef(null);
    const emailRef = useRef(null);
    const dormitoryRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;
        setIsLoading(true);

        // 🔥 입력값 검증 (백엔드 DB 컬럼에 맞게 조정)
        if (!userId.trim()) {
            alert("아이디를 입력해주세요.");
            userIdRef.current.focus();
            setIsLoading(false);
            return;
        }
        if (!password.trim()) {
            alert("비밀번호를 입력해주세요.");
            passwordRef.current.focus();
            setIsLoading(false);
            return;
        }
        if (!userName.trim()) {
            alert("이름을 입력해주세요.");
            userNameRef.current.focus();
            setIsLoading(false);
            return;
        }
        if (!email.trim()) {
            alert("이메일을 입력해주세요.");
            emailRef.current.focus();
            setIsLoading(false);
            return;
        }
        if (!dormitory.trim()) {
            alert("기숙사를 입력해주세요.");
            dormitoryRef.current.focus();
            setIsLoading(false);
            return;
        }

        // ✅ 백엔드 요청 데이터
        const requestData = {
            userId,
            password,
            userName,
            email,
            dormitory
        };

        console.log("🚀 회원가입 요청 데이터:", requestData);

        try {
            const response = await axios.post("http://localhost:3000/user/register", requestData);

            console.log("✅ 서버 응답:", response.data);
            if (response.status === 201) {
                alert("가입이 완료되었습니다.");
                navigate('/');  // ✅ 회원가입 성공 시 홈으로 이동
            }
        } catch (error) {
            console.error("❌ 회원가입 오류:", error.response?.data || error);
            alert(error.response?.data?.message || "회원가입 실패");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="userId">아이디 </label></td>
                            <td><input
                                type="text"
                                id="userId"
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                ref={userIdRef}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="password">비밀번호 </label></td>
                            <td><input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                ref={passwordRef}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="userName">이름 </label></td>
                            <td><input
                                type="text"
                                id="userName"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                ref={userNameRef}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">이메일 </label></td>
                            <td><input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                ref={emailRef}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="dormitory">기숙사 </label></td>
                            <td><input
                                type="text"
                                id="dormitory"
                                value={dormitory}
                                onChange={(e) => setDormitory(e.target.value)}
                                ref={dormitoryRef}
                            /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit" className='signbutton' disabled={isLoading}>
                                    {isLoading ? "가입 중..." : "가입하기"}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default SignupPage;
