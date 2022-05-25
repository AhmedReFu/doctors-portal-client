import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const EmailVerify = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    const emailverify = () => {
        sendEmailVerification();
        alert('Email send check')
    }
    return (

        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Email Verification</h2>

                    <button class="btn my-12" onClick={emailverify}>Send Verification Email</button>
                </div>
            </div>
        </div>
    );
};

export default EmailVerify;