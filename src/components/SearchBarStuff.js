import React, { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // 돋보기 아이콘
import MenuIcon from '@mui/icons-material/Menu'; // 왼쪽 메뉴 아이콘
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = "http://localhost:3000"; // 서버 주소

const SearchBarStuff = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
    const navigate = useNavigate();

    // ✅ 검색 실행 함수
    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            alert("검색어를 입력하세요!");
            return;
        }

        try {
            // 백엔드로 GET 요청 보내기
            const response = await axios.get(`${API_BASE_URL}/groupbuy/search?query=${searchTerm}`);
            console.log("검색 결과:", response.data);

            // 부모 컴포넌트로 검색 결과 전달 (필요한 경우)
            if (onSearch) {
                onSearch(response.data);
            }

            // 검색 결과 페이지로 이동 (선택 사항)
            navigate(`/search?query=${searchTerm}`);
        } catch (error) {
            console.error("검색 중 오류 발생:", error);
            alert("검색 중 오류가 발생했습니다.");
        }
    };

    // ✅ Enter 키 입력 시 검색 실행
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',  
                mt: 2, 
                width: '100%', 
                maxWidth: '700px',  
                margin: '0 auto'  
            }}
        >
            <TextField
                variant="outlined"
                placeholder="찾고 싶은 상품을 입력해주세요!"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress} // ✅ Enter 키 입력 처리
                sx={{ 
                    borderRadius: '25px', 
                    '& .MuiOutlinedInput-root': { 
                        borderRadius: '25px', 
                        paddingLeft: '10px',
                        '& fieldset': { borderColor: '#E1A743' },
                        '&:hover fieldset': { borderColor: '#E1A743' },
                        '&.Mui-focused fieldset': { borderColor: '#E1A743' },
                    }
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MenuIcon sx={{ color: '#6B6B6B' }} />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon 
                                sx={{ color: '#6B6B6B', cursor: "pointer" }} 
                                onClick={handleSearch} // ✅ 돋보기 클릭 시 검색 실행
                            />
                        </InputAdornment>
                    )
                }}
            />
        </Box>
    );
};

export default SearchBarStuff;
