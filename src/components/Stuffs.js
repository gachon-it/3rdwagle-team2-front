import { Container, Grid, Box } from '@mui/material';
import React from 'react';
import Stuff from './Stuff';

const Stuffs = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3} justifyContent="center">
                    {/* 항상 3개씩 배치 */}
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Grid item md={4} key={index}> 
                            <Stuff />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Stuffs;
