import React from 'react';

const InfoCard = ({ img, bg, cardTitle }) => {
    return (
        <div className={`card lg:card-side bg-base-500 shadow-xl p-5 text-white ${bg}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div >
        </div >
    );
};

export default InfoCard;