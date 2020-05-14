import { MDBCol, MDBIcon, MDBRow } from 'mdbreact';
import React from 'react';
import {
  backend,
  database,
  frontend,
  knowledgesDescription,
  knowledgesTitle,
} from '../Texts';
import { returnLanguage } from '../utils';
import CardContainer from './CardContainer';

const Features = () => {
  const title = returnLanguage(knowledgesTitle);
  const description = returnLanguage(knowledgesDescription);
  const front = returnLanguage(frontend);
  const back = returnLanguage(backend);
  const data = returnLanguage(database);
  return (
    <CardContainer>
      <h2 className='h1-responsive font-weight-bold my-5'>{title}</h2>
      <p className='lead grey-text w-responsive mx-auto mb-5'>{description}</p>
      <MDBRow className='ml-5 mr-5'>
        <MDBCol md='4'>
          <MDBIcon icon='code' size='3x' className='light-steel-blue-text' />
          <h5 className='font-weight-bold my-4'>Back-end</h5>
          <p className='grey-text mb-md-0 mb-5'>{back}</p>
        </MDBCol>
        <MDBCol md='4'>
          <MDBIcon icon='mobile-alt' size='3x' className='light-steel-text' />
          <h5 className='font-weight-bold my-4'>Front-end</h5>
          <p className='grey-text mb-md-0 mb-5'>{front}</p>
        </MDBCol>
        <MDBCol md='4'>
          <MDBIcon icon='database' size='3x' className='slate-blue-text' />
          <h5 className='font-weight-bold my-4'>Database</h5>
          <p className='grey-text mb-md-0 mb-5'>{data}</p>
        </MDBCol>
      </MDBRow>
    </CardContainer>
  );
};

export default Features;
