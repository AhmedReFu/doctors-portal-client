import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, price, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-secondary text-2xl">{name}</h2>

                <p>{
                    slots.length ? <span>{slots[0]}</span> : <span className='text-red-600'>Try another date.</span>
                }</p>

                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
                <h2 className='text-xl'>Price: {price}Tk</h2>
                <div className="card-actions justify-center">

                    <label htmlFor="booking-modal" disabled={slots.length === 0} onClick={() => setTreatment(service)} className="btn btn-secondary text-white text-uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;