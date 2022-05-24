import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryBtn from './PrimaryBtn';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url('assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-lg md:max-w-sm rounded-lg shadow-2xl" alt='' />
                <div >
                    <h1 className="text-5xl font-bold" >Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div >
    );
};

export default Banner;