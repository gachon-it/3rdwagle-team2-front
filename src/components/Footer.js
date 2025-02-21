import React from "react";
import { Container, Typography, Stack, IconButton, Divider, Box } from "@mui/material";
import { Instagram, YouTube, LinkedIn } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X"; // MUI 5.14+ 에서 지원

const Footer = () => {
    return (
        <Box component="footer" sx={{ mt: 4, py: 3, bgcolor: "white" }}>
            <Container maxWidth="lg">
                {/* 구분선 */}
                <Divider sx={{ mb: 3 }} />

                {/* 소셜 미디어 아이콘 및 메뉴 */}
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    {/* 소셜 미디어 아이콘 */}
                    <Stack direction="row" spacing={1}>
                        <IconButton>
                            <XIcon />
                        </IconButton>
                        <IconButton>
                            <Instagram />
                        </IconButton>
                        <IconButton>
                            <YouTube />
                        </IconButton>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </Stack>

                    {/* 메뉴 항목 */}
                    <Stack direction="row" spacing={4}>
                        <Typography variant="body1" sx={{ fontWeight: "bold", cursor: "pointer" }}>
                            서비스 소개
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold", cursor: "pointer" }}>
                            이용약관
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold", cursor: "pointer" }}>
                            고객 센터
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
