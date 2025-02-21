import React from 'react';
import { TextField, InputAdornment, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // 돋보기 아이콘 추가
import MenuIcon from '@mui/icons-material/Menu'; // 왼쪽 메뉴 아이콘 추가

const SearchBar = () => {
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
            <Typography variant="h3" sx={{ fontFamily: 'KCC-Ganpan, sans-serif',fontWeight: 'bold', color: '#996633' }}>
                같이 사자
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: 'KCC-Ganpan, sans-serif',fontWeight: 'bold', color: '#996633', mt: -0.5, mb: 2 }}>
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
                    sx={{ 
                        borderRadius: '25px', 
                        '& .MuiOutlinedInput-root': { 
                            borderRadius: '25px', 
                            paddingLeft: '10px',
                            '& fieldset': { borderColor: '#E1A743' }, // 기본 테두리 색
                            '&:hover fieldset': { borderColor: '#E1A743' },  // 마우스 오버 시 테두리 색 변경
                            '&.Mui-focused fieldset': { borderColor: '#E1A743' }, // 클릭(포커스) 시 테두리 색 변경
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MenuIcon sx={{ color: '#6B6B6B' }} /> {/* 왼쪽 아이콘 추가 */}
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon sx={{ color: '#6B6B6B' }} /> {/* 돋보기 아이콘 오른쪽 배치 */}
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
        </Box>
    );
};

export default SearchBar;

