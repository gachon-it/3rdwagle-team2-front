import React from "react";
import { Card, CardContent, Typography, Box, Grid, Container } from "@mui/material";
import { AttachMoney, Person, AccessTime, LocationOn } from "@mui/icons-material";

const DetailPageTitle = ({ price, people, date, location }) => {
    const title = "미분적분학 / 7판"; // 고정 제목

    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "45vh",
            }}
        >
            <Card
                sx={{
                    maxWidth: 1100, // 가로 길이 확장
                    width: "70%", // 화면 크기에 맞춰 유동적 조정
                    height:180,
                    p: 3,
                }}
            >
                {/* 제목 */}
                <Typography variant="h5" fontWeight="bold">
                    {title}
                </Typography>

                {/* 정보 섹션 */}
                <Grid container spacing={3} mt={2}>
                    {/* 금액 */}
                    <Grid item xs={6} md={3}>
                        <Box display="flex" alignItems="center">
                            <AttachMoney sx={{ fontSize: 40, color: "#D4AF37" }} />
                            <Box ml={1}>
                                <Typography variant="body1" fontWeight="bold">
                                    금액
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    1인당 {price}원
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* 인원 */}
                    <Grid item xs={6} md={3}>
                        <Box display="flex" alignItems="center">
                            <Person sx={{ fontSize: 40, color: "black" }} />
                            <Box ml={1}>
                                <Typography variant="body1" fontWeight="bold">
                                    인원
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {people}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* 마감 기한 */}
                    <Grid item xs={6} md={3}>
                        <Box display="flex" alignItems="center">
                            <AccessTime sx={{ fontSize: 40, color: "#D4AF37" }} />
                            <Box ml={1}>
                                <Typography variant="body1" fontWeight="bold">
                                    마감 기한
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {date}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* 픽업 장소 */}
                    <Grid item xs={6} md={3}>
                        <Box display="flex" alignItems="center">
                            <LocationOn sx={{ fontSize: 40, color: "black" }} />
                            <Box ml={1}>
                                <Typography variant="body1" fontWeight="bold">
                                    픽업장소
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {location}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
};

export default DetailPageTitle
