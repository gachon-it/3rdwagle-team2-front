import { Container, Typography } from '@mui/material';
import React from 'react';

const TopContainer = () => {
    return (
        <Container 
            sx={{ 
                display: 'flex', 
                justifyContent: 'center',  
                alignItems: 'center', 
                margin: '20px auto',  
                maxWidth: '950px',  // 전체 크기 조정
            }}
        >
            {/* Hot 공구 (가로로 길게) */}
            <Container 
                sx={{ 
                    marginRight: '20px', 
                    padding: '10px 20px',  
                    border: '2px solid #E1A743',  
                    borderRadius: '15px',  
                    textAlign: 'center',  
                    height: '350px',  // 높이 조정
                    width: '700px', // 가로로 길게 조정
                    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',  
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingTop: '20px',
                }}
            > 
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                    🔥 Hot 공구 🔥 
                </Typography>
            </Container>

            {/* 유저 정보 (높이를 Hot 공구와 동일하게 맞춤) */}
            <Container 
                sx={{ 
                    marginLeft: '20px', 
                    padding: '10px 20px',  
                    border: '2px solid #B0B0B0',  // 회색 테두리
                    borderRadius: '15px',  
                    textAlign: 'center',  
                    height: '350px',  // Hot 공구와 동일한 높이 설정
                    width: '250px', // 가로로 짧게 조정
                    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',  
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingTop: '20px',
                }}
            > 
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                    유저 정보
                </Typography>
            </Container>
        </Container>
    );
};

export default TopContainer;
