import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Grid,
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button
} from "@mui/material";
import sampleImage from "../assets/sample.png"; // 샘플 이미지

const Stuff = ({ groupBuyId, title, price_per_person, max_people, created_at }) => {
    const navigate = useNavigate();

    // ✅ 상세 페이지 이동 시 groupBuyId 전달
    const handleMoreClick = () => {
        navigate(`/group-buy/detail/${groupBuyId}`);
    };

    return (
        <Card sx={{ border: "1px solid #D4AF37", borderRadius: 2, maxWidth: 300 }}>
            <CardContent>
                <Typography variant="h6" fontWeight="bold">
                    {title}
                </Typography>
            </CardContent>

            <CardMedia component="img" height="140" image={sampleImage} alt={title} />

            <CardContent sx={{ px: 2 }}>
                <Typography variant="body2">가격: {price_per_person}</Typography>
                <Typography variant="body2">모집 인원: {max_people}</Typography>
                <Typography variant="body2">날짜: {created_at}</Typography>
            </CardContent>

            <Box textAlign="center" pb={2}>
                <Button variant="contained" onClick={handleMoreClick} sx={{ bgcolor: "#D4AF37" }}>
                    More Details
                </Button>
            </Box>
        </Card>
    );
};

const Stuffs = () => {
    const [stuffs, setStuffs] = useState(null); // 기본값을 null로 설정

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/groupbuy");
                const data = await response.json();
                const data_key = data.data;

                console.log("📌 API 응답 데이터:", data);
                console.log("🗝 data_key 값:", data_key); // 🔥 data_key 로그 확인

                if (data_key && Array.isArray(data_key)) {
                    setStuffs(data_key);  // ✅ 배열 형태로 저장
                } else {
                    console.error("❌ 예상치 못한 응답 형태:", data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // 데이터가 없을 때 로딩 상태 표시
    if (!stuffs) {
        return <Typography variant="h6">데이터를 불러오는 중...</Typography>;
    }

    return (
        <Container>
            

            <Grid container spacing={3}>
                {stuffs.map((stuff) => (
                    <Grid item key={stuff.groupBuyId} xs={12} sm={6} md={4}>
                        <Stuff {...stuff} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Stuffs;
