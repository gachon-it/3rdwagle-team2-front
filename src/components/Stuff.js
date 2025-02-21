import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import sampleImage from "../assets/sample.png"; // 기본 이미지

const API_BASE_URL = "http://localhost:3000"; // 백엔드 서버

const DetailPage = () => {
    const { id } = useParams(); // URL 파라미터에서 id 추출
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
                        imageUrl: groupBuyDetail.image_url ? groupBuyDetail.image_url : sampleImage,
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
    }, [id]); // `id` 변경 시마다 새로운 데이터 요청

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
        <Container sx={{ mt: 4 }}>
            <Card sx={{ border: "1px solid #D4AF37", borderRadius: 2 }}>
                <CardContent>
                    <Typography variant="h5" fontWeight="bold">
                        {item.title}
                    </Typography>
                </CardContent>

                <CardMedia
                    component="img"
                    sx={{
                        height: 300,
                        width: "100%",
                        objectFit: "contain",
                        borderRadius: "5px",
                        backgroundColor: "#f8f8f8",
                    }}
                    image={item.imageUrl}
                    alt={`${item.title} 이미지`}
                    onError={(e) => {
                        console.error("❌ 이미지 로드 실패:", e.target.src);
                        e.target.src = sampleImage; // 기본 이미지로 대체
                    }}
                />

                <CardContent sx={{ px: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {item.content}
                    </Typography>

                    <Box display="flex" justifyContent="space-between" sx={{ mt: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                            인당: {item.price.toLocaleString()}원
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.people}명
                        </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        기한: {item.date}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        위치: {item.location}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontWeight: "bold" }}>
                        상태: {item.status}
                    </Typography>
                </CardContent>

                <Box px={2} pb={2}>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: "#D4AF37",
                            "&:hover": { backgroundColor: "#B58E28" },
                        }}
                        onClick={() => window.history.back()} // 뒤로 가기
                    >
                        뒤로 가기
                    </Button>
                </Box>
            </Card>
        </Container>
    );
};

export default DetailPage;
