import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <div>
            <h2 className='text-center text-primary font-bold text-2xl'>OUR SERVICES</h2>
            <h1 className='text-center text-4xl'>Services We Provide</h1>
            <Service></Service>
            <Service></Service>
            <Service></Service>
        </div>
    );
};

export default Services;