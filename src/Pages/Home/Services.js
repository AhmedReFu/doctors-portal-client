import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    return (
        <div>
            <h2 className='text-center text-primary font-bold text-2xl'>OUR SERVICES</h2>
            <h1 className='text-center text-4xl'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 p-10 mt-4'>
                <Service img={fluoride}></Service>
                <Service img={cavity} ></Service>
                <Service img={whitening}></Service>
            </div>
        </div>
    );
};

export default Services;