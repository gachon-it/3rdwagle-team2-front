import { Container, Typography } from '@mui/material';
import React from 'react';

const BottomContainer = () => {
    return (
        <Container 
            sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                margin: '40px auto', 
                maxWidth: '900px',
            }}
        >
            {/* 왼쪽 컨테이너 */}
            <Container 
                sx={{ 
                    padding: '10px 20px',  
                    border: '2px solid #E1A743',  
                    borderRadius: '15px',  
                    textAlign: 'center',  
                    height: '350px',
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start', // 글씨를 맨 위에 배치
                    alignItems: 'center',
                    paddingTop: '20px' // 글씨와 컨테이너 상단 간격 추가
                }}
            > 
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                    물건 공동 구매
                </Typography>
            </Container>

            {/* 중앙 컨테이너 (배달 공동 구매) */}
            <Container 
                sx={{ 
                    padding: '10px 20px',  
                    border: '2px solid #E1A743',  
                    borderRadius: '15px',  
                    textAlign: 'center',  
                    height: '350px',
                    width: '320px',  
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',  
                    alignItems: 'center',
                    paddingTop: '20px',  
                }}
            > 
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    🚀 배달 공동 구매 🚀
                </Typography>
            </Container>

            {/* 오른쪽 컨테이너 */}
            <Container 
                sx={{ 
                    padding: '10px 20px',  
                    border: '2px solid #E1A743',  
                    borderRadius: '15px',  
                    textAlign: 'center',  
                    height: '350px',
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',  
                    alignItems: 'center',
                    paddingTop: '20px'  
                }}
            > 
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                    공용 혜택
                </Typography>
            </Container>
        </Container>
    );
};

export default BottomContainer;
