import React from 'react';
import Banner from './Banner';
import CourseSystem from './CourseSystem';
import Faqs from './Faqs';
import Features from './Features';
import Reviews from './Reviews';
import Statistics from './Statistics';
import Teams from './Teams';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Statistics></Statistics>
            <Features></Features>
            <CourseSystem></CourseSystem>
            <Reviews></Reviews>
            <Teams></Teams>

        </>
    );
};

export default Home;