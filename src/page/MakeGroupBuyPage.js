import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    InputAdornment,
    IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const MakeGroupBuyPage = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        people: "",
        price: "",
        deadline: "",
        location: "",
        image: null,
    });

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 이미지 파일 선택 핸들러
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: URL.createObjectURL(file) });
        }
    };

    // 폼 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("제출된 데이터:", formData);
        alert("공동구매가 생성되었습니다!");
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                mt: 5,
                p: 3,
                border: "1px solid #D4AF37",
                borderRadius: 2,
                boxShadow: 3,
            }}
        >
            <Typography variant="h5" fontWeight="bold" mb={3}>
                공동구매 생성
            </Typography>

            {/* 제목 */}
            <TextField
                fullWidth
                label="제목"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
            />

            {/* 설명 */}
            <TextField
                fullWidth
                label="설명"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={3}
                required
                sx={{ mb: 2 }}
            />

            {/* 인원 */}
            <TextField
                fullWidth
                label="최대 인원"
                name="people"
                type="number"
                value={formData.people}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
            />

            {/* 가격 */}
            <TextField
                fullWidth
                label="가격"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                required
                InputProps={{
                    endAdornment: <InputAdornment position="end">원</InputAdornment>,
                }}
                sx={{ mb: 2 }}
            />

            {/* 마감 기한 */}
            <TextField
                fullWidth
                label="마감 기한"
                name="deadline"
                type="date"
                value={formData.deadline}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 2 }}
            />

            {/* 픽업 장소 */}
            <TextField
                fullWidth
                label="픽업 장소"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                sx={{ mb: 2 }}
            />

            {/* 이미지 업로드 */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Button
                    variant="contained"
                    component="label"
                    startIcon={<PhotoCamera />}
                    sx={{
                        backgroundColor: "#D4AF37",
                        "&:hover": { backgroundColor: "#B58E28" },
                    }}
                >
                    이미지 업로드
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </Button>
                {formData.image && (
                    <Box
                        component="img"
                        src={formData.image}
                        alt="업로드된 이미지"
                        sx={{
                            width: 80,
                            height: 80,
                            objectFit: "cover",
                            borderRadius: 2,
                            ml: 2,
                        }}
                    />
                )}
            </Box>

            {/* 제출 버튼 */}
            <Button
                fullWidth
                variant="contained"
                sx={{
                    backgroundColor: "#D4AF37",
                    "&:hover": { backgroundColor: "#B58E28" },
                }}
                onClick={handleSubmit}
            >
                공동구매 생성하기
            </Button>
        </Container>
    );
};

export default MakeGroupBuyPage;
