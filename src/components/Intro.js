import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
} from 'mdbreact';
import React from 'react';
import image from '../assets/galaxy.jpg';
import { introButton, introDescription } from '../Texts';
import { returnLanguage } from '../utils';
const Intro = () => {
  const description = returnLanguage(introDescription);
  const button = returnLanguage(introButton);
  return (
    <>
      <MDBView src={image} fixed>
        <MDBMask className='rgba-black-strong d-flex justify-content-center align-items-center'>
          <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold'>
                  Thiago
                  {`\n`}
                  <span className='light-steel-text font-weight-bold'>
                    Santana
                  </span>
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold'>
                  {description}
                </h5>
                <MDBBtn
                  social='li'
                  className=''
                  size='lg'
                  href='https://www.linkedin.com/in/thiago-santana-956653178/'
                  target='_blank'
                >
                  <MDBIcon fab icon='linkedin' className='mr-1' /> {button}
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
      <div id='intro-end' />
    </>
  );
};

export default Intro;
