import { MDBRow } from 'mdbreact';
import React from 'react';
import code from '../../assets/code.jpg';
import python from '../../assets/python.jpg';
import { projectsTitle } from './content';
import Project from './Project';
const Projects = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>{projectsTitle}</h2>
      <p className='grey-text w-responsive mx-auto mb-5'></p>

      <MDBRow className='d-flex justify-content-center'>
        <Project
          fab
          iconName='node-js'
          iconColor='#639a58'
          title='API Challenge Bossabox'
          image={code}
          codeLink='https://github.com/ThiDiamond/BossaBoxBackend/'
          docLink='https://thidiamond-bossabox-api.herokuapp.com/docs'
        />
        <Project
          fab
          iconName='python'
          iconColor='#a2ce24'
          title='URI Online Judge Challenges'
          image={python}
          codeLink='https://github.com/ThiDiamond/Uri'
        />
      </MDBRow>
    </section>
  );
};

export default Projects;
