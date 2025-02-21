import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import sampleImage from "../assets/sample.png";

const API_BASE_URL = "http://localhost:3000"; // 백엔드 서버

const Stuffs = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/groupbuy`, {
                    withCredentials: true, // CORS 문제 방지
                });

                if (Array.isArray(response.data)) {
                    setItems(
                        response.data.map(groupBuy => ({
                            id: groupBuy.groupBuyId,
                            title: groupBuy.title,
                            content: groupBuy.content,
                            price: groupBuy.price_per_person,
                            people: groupBuy.max_people,
                            date: new Date(groupBuy.created_at).toLocaleDateString(),
                            location: groupBuy.location || "위치 미정",
                            status: groupBuy.status,
                            imageUrl: groupBuy.image_url ? groupBuy.image_url : sampleImage
                            // 기본 이미지
                        
                        }))
                    );
                } else {
                    throw new Error("Invalid data format");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleMoreClick = (id) => {
        navigate(`/group-buy/detail/${id}`);
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography color="error">Error: {error}</Typography>;
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3} justifyContent="center">
                    {items.map((item) => (
                        <Grid item md={4} key={item.id}>
                            <Card sx={{ border: "1px solid #D4AF37", borderRadius: 2, maxWidth: 300 }}>
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        {item.title}
                                    </Typography>
                                </CardContent>

                                <CardMedia 
    component="img"
    sx={{
        height: 180, // 카드 안에서 이미지 높이 설정
        width: "100%", // 카드의 가로폭에 맞춤
        objectFit: "contain", // 📌 이미지가 잘리지 않고 전체가 보이도록 설정
        borderRadius: "5px", // (선택) 이미지 둥글게
        backgroundColor: "#f8f8f8" // (선택) 이미지 비율이 맞지 않을 때 빈 공간 배경색 설정
    }}
    image={item.imageUrl} 
    alt={`${item.title} 이미지`} 
    onError={(e) => {
        console.error("❌ 이미지 로드 실패:", e.target.src);
        e.target.src = sampleImage; // 기본 이미지로 대체
    }}
/>



                                <CardContent sx={{ px: 2 }}>
                                    <Box display="flex" justifyContent="space-between">
                                        <Typography variant="body2" color="text.secondary">
                                            인당 / {item.price.toLocaleString()}원
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            명 {item.people}
                                        </Typography>
                                    </Box>

                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                        기한 {item.date}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                        위치 {item.location}
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
                                        onClick={() => handleMoreClick(item.id)}
                                    >
                                        더보기
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Stuffs;
