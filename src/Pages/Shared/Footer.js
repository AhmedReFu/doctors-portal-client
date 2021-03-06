import React from 'react';
import footer from '../../assets/images/footer.png';
const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer style={
            {
                background: `url(${footer})`
            }

        } className="bg-cover mt-14 items-center text-neutral">
            <div className='footer p-10 '>
                <div>
                    <span className="footer-title">Services</span>
                    <a href=' ' className="link link-hover">Branding</a>
                    <a href=' ' className="link link-hover">Design</a>
                    <a href=' ' className="link link-hover" > Marketing</a >
                    <a href=' ' className="link link-hover" > Advertisement</a >
                </div >
                <div>
                    <span className="footer-title">Company</span>
                    <a href=' ' className="link link-hover" > About us</a >
                    <a href=' ' className="link link-hover" > Contact</a >
                    <a href=' ' className="link link-hover" > Jobs</a >
                    <a href=' ' className="link link-hover" > Press kit</a >
                </div >
                <div>
                    <span className="footer-title">Legal</span>
                    <a href=' ' className="link link-hover" > Terms of use</a >
                    <a href=' ' className="link link-hover" > Privacy policy</a >
                    <a href=' ' className="link link-hover" > Cookie policy</a >
                </div >
            </div >

            <div className='text-center mt-10'>
                <p className='py-6 text-2xl'>Copyright &copy; {year} - All right reserved by MD NAZMUL ISLAM</p>
            </div>
        </footer >
    );
};

export default Footer;