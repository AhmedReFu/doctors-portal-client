import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const navigate = useNavigate();
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const verify = () => {
        if (user.emailVerified === false) {
            return navigate('/verify')
        }
        return;
    }
    verify()
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
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" required name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="text" disabled required name='email' placeholder="Email Address" value={user.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" required name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" placeholder="Date" className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;