import {
  MDBBtn,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBMask,
  MDBView,
} from 'mdbreact';
import React from 'react';

const Project = ({ image, link, title, description, codeLink, docLink }) => {
  return (
    <MDBCol md='6' xl='5' className='mb-4'>
      <MDBView className='overlay rounded z-depth-2' waves>
        <img src={image} alt='' className='img-fluid' />
        <a href={link}>
          <MDBMask overlay='white-slight' />
        </a>
      </MDBView>
      <MDBCardBody className='pb-0'>
        <a href={link} className='slate-gray-text'>
          <h5 className='font-weight-bold mt-2 mb-3 slate-gray-text'>
            <MDBIcon icon='code' className='pr-2' />
            {title}
          </h5>
        </a>
        <p>{description}</p>
        <div>
          <MDBBtn href={codeLink} color='primary' rounded>
            <MDBIcon fab icon='github' className='pr-2' />
            Source code
          </MDBBtn>
          <MDBBtn href={docLink} color='primary' rounded>
            <MDBIcon icon='book' className='pr-2' />
            Documentation
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCol>
  );
};

export default Project;
