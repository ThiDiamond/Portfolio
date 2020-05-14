import { MDBCard, MDBCardBody } from 'mdbreact';
import React from 'react';
import SectionContainer from './sectionContainer';
const CardContainer = (props) => {
  const { children } = props;
  return (
    <SectionContainer noBorder className='text-center'>
      <MDBCard className='mb-5 px-5 pb-5'>
        <MDBCardBody>{children}</MDBCardBody>
      </MDBCard>
    </SectionContainer>
  );
};

export default CardContainer;
