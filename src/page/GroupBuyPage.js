import { Container } from '@mui/material';
import React from 'react';
import SearchBarStuff from '../components/SearchBarStuff';
import Stuffs from '../components/Stuffs';
import Footer from '../components/Footer';

const GroupBuyPage = () => {
    return(
        <Container>
            <SearchBarStuff/>
            <Stuffs/>
            <Footer/>
        </Container>
    );
};

export default GroupBuyPage;