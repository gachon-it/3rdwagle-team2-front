import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import axios from "axios";
import { Container, Box, Button, Typography } from "@mui/material";
import sampleImage from "../assets/sample.png"; // 기본 이미지
import Footer from "../components/Footer";
import DetailPageTitle from "../components/DetailPageTitle";
import DetailPageContent from "../components/DetailPageContent";

const API_BASE_URL = "http://localhost:3000"; // 백엔드 서버

const GroupBuyDetailPage = () => {
    const { id } = useParams(); // URL 파라미터에서 id 추출
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItemDetail = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/groupbuy/${id}`, {
                    withCredentials: true, // CORS 문제 방지
                });

                if (response.data) {
                    const groupBuyDetail = response.data;
                    setItem({
                        title: groupBuyDetail.title,
                        content: groupBuyDetail.content,
                        price: groupBuyDetail.price_per_person,
                        people: groupBuyDetail.max_people,
                        date: new Date(groupBuyDetail.created_at).toLocaleDateString(),
                        location: groupBuyDetail.location || "위치 미정",
                        status: groupBuyDetail.status,
                        imageUrl: groupBuyDetail.image_url ? groupBuyDetail.image_url : sampleImage, // DB에서 이미지 URL을 가져옴
                    });
                } else {
                    throw new Error("Invalid data format");
                }
            } catch (error) {
                console.error("Error fetching item detail:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItemDetail();
    }, [id]);

    const handleJoinClick = () => {
        alert("참여 신청이 완료되었습니다!");
    };

    const handleBackClick = () => {
        navigate("/group-buy");  // 목록 페이지로 돌아가기
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography color="error">Error: {error}</Typography>;
    }

    if (!item) {
        return <Typography color="error">Item not found</Typography>;
    }

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
            <DetailPageTitle title={item.title} price={item.price} people={item.people} date={item.date} location={item.location} />
            <DetailPageContent description={item.content} imageUrl={item.imageUrl} /> {/* 이미지 URL 전달 */}

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

            {/* Footer */}
            <Box sx={{ width: "100%", mt: 5 }}>
                <Footer />
            </Box>
        </Container>
    );
};

export default GroupBuyDetailPage;
