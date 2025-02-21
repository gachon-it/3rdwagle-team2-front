import React, { useState } from 'react';
import { TextField, InputAdornment, Box, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // 돋보기 아이콘 추가
import MenuIcon from '@mui/icons-material/Menu'; // 왼쪽 메뉴 아이콘 추가
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState(''); // 검색어 상태 관리
    const navigate = useNavigate();

    // 검색 실행 함수
    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/groupbuy/search?query=${encodeURIComponent(query)}`); // 검색 페이지로 이동
        }
    };

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                textAlign: 'center', 
                mt: 3,
                mb: 5
            }}
        >
            <Typography variant="h3" sx={{ fontFamily: 'KCC-Ganpan, sans-serif', fontWeight: 'bold', color: '#996633' }}>
                같이 사자
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: 'KCC-Ganpan, sans-serif', fontWeight: 'bold', color: '#996633', mt: -0.5, mb: 2 }}>
                TOGATHER
            </Typography>
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
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} // 입력값 상태 업데이트
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // 엔터 키 검색 가능
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
                                <IconButton onClick={handleSearch}>
                                    <SearchIcon sx={{ color: '#6B6B6B' }} />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
        </Box>
    );
};

export default SearchBar;
