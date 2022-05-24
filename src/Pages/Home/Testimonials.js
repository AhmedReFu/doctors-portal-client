import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Doctor from './Doctor';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'winson Herry',
            review: '',
            img: people1
        },
        {
            _id: 2,
            name: 'winson Herry',
            review: '',
            img: people2
        },
        {
            _id: 3,
            name: 'winson Herry',
            review: '',
            img: people3
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What our Patients says</h2>
                </div>
                <div>
                    <img src={quote} className="lg:w-48 w-24" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    reviews.map(review => <Doctor key={review._id} review={review}></Doctor>)
                }
            </div>
        </section>
    );
};

export default Testimonials;