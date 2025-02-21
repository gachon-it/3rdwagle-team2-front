import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import sampleImage from "../assets/sample.png"; // 로컬 이미지 가져오기

const Stuff = ({ title, price, people, date }) => {
    return (
        <Card sx={{ border: "1px solid #D4AF37", borderRadius: 2, maxWidth: 300 }}>
            {/* 제목 */}
            <CardContent>
                <Typography variant="h6" fontWeight="bold">
                    {title}
                </Typography>
            </CardContent>

            {/* 이미지 */}
            <CardMedia component="img" height="140" image={sampleImage} alt={title} />

            {/* 정보 */}
            <CardContent sx={{ px: 2 }}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary">
                        인당 / {price}원
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        명 {people}
                    </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    기한 {date}
                </Typography>
            </CardContent>

            {/* 버튼 */}
            <Box px={2} pb={2}>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "#D4AF37",
                        "&:hover": { backgroundColor: "#B58E28" },
                    }}
                >
                    더보기
                </Button>
            </Box>
        </Card>
    );
};

export default Stuff;
