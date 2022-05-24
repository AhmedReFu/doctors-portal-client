import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;