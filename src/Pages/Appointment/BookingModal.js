import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const navigate = useNavigate();
    const { _id, name, slots, price } = treatment;
    const formattedDate = format(date, 'PP');
    const [user, loading, error] = useAuthState(auth);
    /*     const verify = () => {
            if (user.emailVerified === false) {
                return navigate('/verify')
            }
            return;
        }
        verify() */
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch('https://doctors-protal-server-delta.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // to close the modal
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot} treatment ${name}`)
                }
                else {
                    toast.error(`Already have and appointment on, ${data.booking?.date} at ${data.booking?.slot} treatment ${name}`)
                }
                refetch();
                setTreatment(null);

            })

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
                        <input type="text" required name='price' readOnly placeholder="Phone" disabled className="input input-bordered w-full max-w-xs" value={`Price: ${price}`} />
                        <input type="submit" value="Submit" placeholder="Date" className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
