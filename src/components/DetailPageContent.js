import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

import sampleImage from "../assets/sample.png";

const DetailPageContent = ({ description }) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Card
                sx={{
                    border: "1px solid #D4AF37",
                    borderRadius: "16px",
                    maxWidth: 1000, // DetailPageTitle과 동일한 너비 유지
                    width: "68%",
                    height: 500,
                    p: 3,
                    boxShadow: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // 카드 전체 중앙 정렬
                    textAlign: "center", // 내용도 중앙 정렬
                }}
            >
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    상세 내용
                </Typography>

                {/* 이미지 중앙 정렬 */}
                <Box display="flex" justifyContent="center">
                    <Box
                        component="img"
                        src={sampleImage}
                        alt="책 이미지"
                        sx={{
                            width: 250,
                            height: "auto",
                            borderRadius: "8px",
                            border: "3px solid #007BFF",
                        }}
                    />
                </Box>

                {/* 설명 중앙 정렬 */}
                <CardContent
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        textAlign: "center",
                        width: "100%", // 가로 너비 조정
                    }}
                >
                    <Typography variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default DetailPageContent;

