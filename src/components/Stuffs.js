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
                    withCredentials: true, // CORS 문제 방지 (필요한 경우)
                });

                if (Array.isArray(response.data)) {
                    setItems(
                        response.data.map(groupBuy => ({
                            id: groupBuy.groupBuyId, // ✅ 고유 ID 사용
                            title: groupBuy.title,
                            content:groupBuy.content,
                            price: groupBuy.price_per_person,
                            people: groupBuy.max_people,
                            date: new Date(groupBuy.created_at).toLocaleDateString(), // 날짜 변환
                            location: groupBuy.location || "위치 미정",
                            status: groupBuy.status // 모집 중 / 종료
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
        navigate(`/group-buy/detail/${id}`); // ✅ 상세 페이지 이동 시 ID 포함
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

                                <CardMedia component="img" height="140" image={sampleImage} alt={`${item.title} 이미지`} />

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
                                        onClick={() => handleMoreClick(item.id)} // ✅ 상세 보기 시 ID 전달
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

