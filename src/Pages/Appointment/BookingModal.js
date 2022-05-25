import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)

        // to close the modal
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} action="" className='grid grid-cols-1  gap-3 justify-items-center mt-2'>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" required name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" required name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" required name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" placeholder="Date" className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;