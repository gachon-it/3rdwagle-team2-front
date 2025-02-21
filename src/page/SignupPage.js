import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css"

const SignupPage = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [emailDomain, setEmailDomain] = useState('naver.com');
    const [dormitory, setDormitory] = useState('');
    const navigate = useNavigate();

    const idRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const emailIdRef = useRef(null);
    const dormitoryRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = `${emailId}@${emailDomain}`;

        if (!id) {
            alert("아이디를 입력해주세요.");
            idRef.current.focus();
            return;
        }
        if (!password) {
            alert("비밀번호를 입력해주세요.");
            passwordRef.current.focus();
            return;
        }
        if (!name) {
            alert("이름을 입력해주세요.");
            nameRef.current.focus();
            return;
        }
        if (!emailId) {
            alert("이메일을 입력해주세요.");
            emailIdRef.current.focus();
            return;
        }
        if (!dormitory) {
            alert("기숙사를 입력해주세요.");
            dormitoryRef.current.focus();
            return;
        }

        console.log('회원가입 정보:', { id, password, name, email, dormitory });
        alert("가입이 완료되었습니다.");
        navigate('/');
    };

    return (
        <div className="container">
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="id">아이디 </label></td>
                            <td><input
                                type="text"
                                id="id"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                ref={idRef}
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
                            <td><label htmlFor="name">이름 </label></td>
                            <td><input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                ref={nameRef}
                            /></td>
                        </tr>
                        <tr>
    <td><label htmlFor="email">이메일 </label></td>
    <td>
        <div className="email-input">
            <input
                type="text"
                id="emailId"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                ref={emailIdRef}
            />
            <span>@</span>
            <select 
                id="emailDomain" 
                value={emailDomain} 
                onChange={(e) => setEmailDomain(e.target.value)}
            >
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
            </select>
        </div>
    </td>
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
                                <button type="submit" className='signbutton'>가입하기</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default SignupPage;