import React from 'react';
import { Container, Box, Button } from '@mui/material';
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

    const handleJoinClick = () => {
        alert("참여 신청이 완료되었습니다!");
    };

    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 4,
                mb: 1,
                width: "100%", // 전체 너비 유지
                maxWidth: "1100px", // 콘텐츠 정렬 유지
            }}
        >
            <DetailPageTitle {...detailData} />
            <DetailPageContent description={detailData.description} />

            {/* 버튼 컨테이너 */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
                {/* 참여하기 버튼 */}
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#D4AF37",
                        color: "white",
                        fontWeight: "bold",
                        px: 4,
                        py: 1.5,
                        borderRadius: "8px",
                        "&:hover": {
                            backgroundColor: "#C4A030",
                        },
                    }}
                    onClick={handleJoinClick}
                >
                    참여하기
                </Button>

                {/* 목록으로 버튼 */}
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#D4AF37",
                        color: "white",
                        fontWeight: "bold",
                        px: 4,
                        py: 1.5,
                        borderRadius: "8px",
                        "&:hover": {
                            backgroundColor: "#C4A030",
                        },
                    }}
                    onClick={handleBackClick}
                >
                    목록으로
                </Button>
            </Box>

            {/* Footer의 너비를 100%로 유지 */}
            <Box sx={{ width: "100%", mt: 5 }}>
                <Footer />
            </Box>
        </Container>
    );
};

export default GroupBuyDetailPage;


