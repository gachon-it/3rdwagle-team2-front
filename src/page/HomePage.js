import React from 'react';
import SearchBar from '../components/SearchBar';
import TopContainer from "../components/TopContainer";
import BottomContainer from '../components/BottomContainer';
import Footer from "../components/Footer";

const HomePage = () => {
    return(
        <div>
            <SearchBar/>
            <TopContainer/>
            <BottomContainer/>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;