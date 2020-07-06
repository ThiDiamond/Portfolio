import { MDBFooter } from 'mdbreact';
import React from 'react';
const Footer = () => {
  return (
    <MDBFooter color='primary-color'>
      <p className='footer-copyright mb-0 py-3 text-center'>
        &copy; {new Date().getFullYear()}
        <a href='https://www.linkedin.com/in/thiago-santana-956653178/'>
          {' '}
          By Thiago Santana{' '}
        </a>
      </p>
      <p className='footer-copyright mb-0 py-3 text-center'>
        <a href='https://unsplash.com/photos/4dpAqfTbvKA'>
          {' '}
          Background image by Jeremy Thomas on Unsplash{' '}
        </a>
      </p>
    </MDBFooter>
  );
};

export default Footer;
