import { MDBCol, MDBIcon, MDBRow } from 'mdbreact';
import React from 'react';
import CardContainer from '../../components/CardContainer';
import {
  bootstrapDescription,
  cssDescription,
  gitDescription,
  htmlDescription,
  nodeDescription,
  pythonDescription,
  reactDescription,
  skillsTitle,
  sqlDescription,
  wordpressDescription,
} from '../../Texts';
import { returnLanguage } from '../../utils';

const Skills = () => {
  const bootstrap = returnLanguage(bootstrapDescription);
  const react = returnLanguage(reactDescription);
  const node = returnLanguage(nodeDescription);
  const html = returnLanguage(htmlDescription);
  const css = returnLanguage(cssDescription);
  const git = returnLanguage(gitDescription);
  const sql = returnLanguage(sqlDescription);
  const python = returnLanguage(pythonDescription);
  const wordpress = returnLanguage(wordpressDescription);
  const title = returnLanguage(skillsTitle);

  return (
    <CardContainer>
      <h2 className='h1-responsive font-weight-bold my-5'>{title}</h2>

      <MDBRow className='mb-5 mx-5'>
        <MDBCol md='4'>
          <MDBIcon fab icon='react' size='3x' style={{ color: '#00d8ff' }} />
          <h5 className='font-weight-bold my-4'>React JS</h5>
          <p className='grey-text mb-md-0 mb-5'>{react}</p>
        </MDBCol>
        <MDBCol md='4'>
          <MDBIcon
            fab
            icon='bootstrap'
            size='3x'
            style={{ color: '#563d7c' }}
          />
          <h5 className='font-weight-bold my-4'>Bootstrap</h5>
          <p className='grey-text mb-md-0 mb-5'>{bootstrap}</p>
        </MDBCol>
        <MDBCol md='4'>
          <MDBIcon fab icon='node-js' size='3x' style={{ color: '#639a58' }} />
          <h5 className='font-weight-bold my-4'>Node JS</h5>
          <p className='grey-text mb-md-0 mb-5'>{node}</p>
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-5 mx-5'>
        <MDBCol md='4'>
          <MDBIcon fab icon='html5' size='3x' style={{ color: '#f06529' }} />
          <h5 className='font-weight-bold my-4'>HTML5</h5>
          <p className='grey-text mb-md-0 mb-5'>{html} </p>
        </MDBCol>
        <MDBCol md='4'>
          <MDBIcon fab icon='css3' size='3x' style={{ color: '#29a9df' }} />
          <h5 className='font-weight-bold my-4'>CSS3</h5>
          <p className='grey-text mb-md-0 mb-5'>{css} </p>
        </MDBCol>
        <MDBCol md='4'>
          <MDBIcon fab icon='git-alt' size='3x' style={{ color: '#f05133' }} />
          <h5 className='font-weight-bold my-4'>GIT</h5>
          <p className='grey-text mb-md-0 mb-5'>{git} </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className='mb-5 mx-5'>
        <MDBCol md='4'>
          <MDBIcon icon='database' size='3x' style={{ color: '#000' }} />
          <h5 className='font-weight-bold my-4'>SQL e NoSQL</h5>
          <p className='grey-text mb-md-0 mb-5'>{sql} </p>
        </MDBCol>
        <MDBCol md='4'>
          <MDBIcon fab icon='python' size='3x' style={{ color: '#a2ce24' }} />
          <h5 className='font-weight-bold my-4'>Python</h5>
          <p className='grey-text mb-md-0 mb-5'>{python}</p>
        </MDBCol>
        <MDBCol md='4'>
          <MDBIcon
            fab
            icon='wordpress'
            size='3x'
            style={{ color: '#21759b' }}
          />
          <h5 className='font-weight-bold my-4'>Wordpress</h5>
          <p className='grey-text mb-md-0 mb-5'>{wordpress}</p>
        </MDBCol>
      </MDBRow>
    </CardContainer>
  );
};

export default Skills;
