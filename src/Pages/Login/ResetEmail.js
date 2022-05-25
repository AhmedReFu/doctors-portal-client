import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ResetEmail = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    if (error) {
        alert(error.message)
    }
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    console.log(email)
    const resetpassword = async () => {
        await sendPasswordResetEmail(email);

    }
    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Reset Password</h2>
                        <div class="form-control my-12">
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <label class="input-group">
                                <input type="email" placeholder="your email" value={user?.email} onChange={(e) => setEmail(e.target.value)} class="input input-bordered w-full max-w-xs" />
                                <button className='btn' onClick={resetpassword}>SEND</button>

                            </label>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ResetEmail;