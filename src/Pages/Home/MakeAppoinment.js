import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png';
import PrimaryBtn from './PrimaryBtn';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='mt-20 flex justify-center items-center text-white'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className=' text-5xl my-4'>Make an Appointment Today</h2>
                <p className='text-2xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis voluptatibus eos sapiente alias culpa ab suscipit magnam temporibus. Qui quibusdam fugit voluptatum ex. Autem quos optio doloremque asperiores in laudantium pariatur dicta deleniti fugit ipsum quis, quo soluta explicabo.</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </section>
    );
};

export default MakeAppoinment;