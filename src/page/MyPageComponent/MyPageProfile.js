import React, { useState, useEffect } from 'react';
import './MyPageProfile.css';

const MyPageProfile = () => {
    const [opinion, setOpinion] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        // 페이지 로드 시 저장된 데이터 불러오기
        const savedOpinion = localStorage.getItem('userOpinion');
        const savedName = localStorage.getItem('userName');
        if (savedOpinion) {
            setOpinion(savedOpinion);
        }
        if (savedName) {
            setName(savedName);
        }
    }, []);

    const handleOpinionChange = (e) => {
        const newOpinion = e.target.value;
        setOpinion(newOpinion);
        // 입력 값 변경 시 자동 저장
        localStorage.setItem('userOpinion', newOpinion);
    };

    return(
        <div className="profile-container"> 
            <fieldset>
                <div className="profile-content">
                    <div id="circle"></div>
                    <div className="text-content">
                        <h1>{name || 'Guest'}</h1>
                        <textarea 
                            name="opinion" 
                            cols="30" 
                            rows="5"
                            value={opinion}
                            onChange={handleOpinionChange}
                        ></textarea>
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

export default MyPageProfile;