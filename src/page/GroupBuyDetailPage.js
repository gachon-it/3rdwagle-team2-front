import React from 'react';
import { Container, Box } from '@mui/material';
import DetailPageTitle from '../components/DetailPageTitle';
import DetailPageContent from "../components/DetailPageContent";
import Footer from "../components/Footer";

const GroupBuyDetailPage = () => {
    const detailData = {
        price: 23000,
        people: "6/7명",
        date: "2025.02.28",
        location: "가천대 제3기숙사",
        description: "미분적분학 책 공유해요. 이 책은 공과대학 1학년 필수교재로 예제/유제 시험문제로 나옵니다.",
    };

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 4,
                mb: 1, // Footer와의 간격 조정
            }}
        >
            <DetailPageTitle {...detailData} />

            {/* DetailPageContent 중앙 정렬 */}
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <DetailPageContent description={detailData.description} />
            </Box>

            {/* Footer 추가 */}
            <Footer />
        </Container>
    );
};

export default GroupBuyDetailPage;
