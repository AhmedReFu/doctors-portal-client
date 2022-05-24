import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from './PrimaryBtn';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='mt-20 flex justify-center items-center text-center mb-5'>
            <div className='mb-12'>
                <h2 className='text-xl text-primary mt-10'>Contact Us</h2>
                <h2 className='text-4xl my-3 text-white'>Stay connected with us</h2>
                <input type="text" placeholder="Email Address" class="input input-bordered input-md w-full max-w-md my-3" />
                <input type="text" placeholder="Subject" class="input input-bordered input-md w-full max-w-md my-3" />
                <textarea className="textarea w-full max-w-md my-3" placeholder="Your message"></textarea>
                <PrimaryBtn>Submit</PrimaryBtn>
            </div>
        </section>
    );
};

export default Contact;