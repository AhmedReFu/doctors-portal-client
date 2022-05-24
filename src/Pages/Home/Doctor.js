import React from 'react';

const Doctor = ({ review }) => {
    return (
        <div className="card bg-base-100 shadow-xl" >
            <div className="card-body" >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio placeat adipisci sed dignissimos labore nesciunt magnam praesentium ad temporibus deserunt.</p>
                <div className="card-actions justify-start items-center mt-5" >
                    <div className="avatar mr-4" >
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5" >
                            <img src={review.img} alt='' />
                        </div >
                    </div >
                    <div>
                        <h3 className='text-2xl font-bold'>{review.name}</h3>
                        <h3 className='text-1xl font-bold'>Bangladesh</h3>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Doctor;