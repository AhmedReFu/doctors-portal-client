import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    const bg = `bg-gradient-to-r from-secondary to-primary`

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 p-10'>
            <InfoCard cardTitle="Opening Hours" img={clock} bg={bg}></InfoCard>
            <InfoCard cardTitle="Visit Our Location" img={marker} bg={`bg-accent`}></InfoCard>
            <InfoCard cardTitle="Contact Us Now" img={phone} bg={bg}></InfoCard>
        </div>
    );
};

export default Info;