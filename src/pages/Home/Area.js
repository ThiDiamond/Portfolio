import { MDBCol, MDBIcon } from 'mdbreact';
import React from 'react';

const Area = ({ title, description, className, iconName }) => (
  <MDBCol md='4'>
    <MDBIcon icon={iconName} size='3x' className={className} />
    <h5 className='font-weight-bold my-4'>{title}</h5>
    <p className='grey-text mb-md-0 mb-5'>{description}</p>
  </MDBCol>
);

export default Area;
