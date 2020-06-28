import { MDBRow } from 'mdbreact';
import React from 'react';
import code from '../../assets/code.jpg';
import { projectsTitle } from '../../Texts';
import { returnLanguage } from '../../utils';
import Project from './Project';
const Projects = () => {
  const title = returnLanguage(projectsTitle);
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>{title}</h2>
      <p className='grey-text w-responsive mx-auto mb-5'></p>

      <MDBRow className='d-flex justify-content-center'>
        <Project
          title='API Challenge Bossabox'
          image={code}
          codeLink='https://github.com/ThiDiamond/BossaBoxBackend/'
          docLink='https://thidiamond-bossabox-api.herokuapp.com/docs'
        />
      </MDBRow>
    </section>
  );
};

export default Projects;
