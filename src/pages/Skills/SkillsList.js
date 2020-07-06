import { MDBRow } from 'mdbreact';
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
} from './content';
import Skill from './Skill';

const SkillsList = () => {
  return (
    <CardContainer>
      <h2 className='h1-responsive font-weight-bold my-5'>{skillsTitle}</h2>

      <MDBRow className='mb-5'>
        <Skill
          fab
          iconName='react'
          color='#00d8ff'
          title='React JS'
          description={reactDescription}
        />
        <Skill
          fab
          iconName='bootstrap'
          color='#563d7c'
          title='Bootstrap'
          description={bootstrapDescription}
        />
        <Skill
          fab
          iconName='node-js'
          color='#639a58'
          title='Node JS'
          description={nodeDescription}
        />
        <Skill
          fab
          iconName='html5'
          color='#f06529'
          title='HTML5'
          description={htmlDescription}
        />
        <Skill
          fab
          iconName='css3'
          color='#29a9df'
          title='CSS3'
          description={cssDescription}
        />
        <Skill
          fab
          iconName='git-alt'
          color='#f05133'
          title='GIT'
          description={gitDescription}
        />

        <Skill
          fab
          iconName='git-alt'
          color='#f05133'
          title='GIT'
          description={gitDescription}
        />

        <Skill
          iconName='database'
          color='#000'
          title='SQL - NoSQL'
          description={sqlDescription}
        />

        <Skill
          fab
          iconName='python'
          color='#a2ce24'
          title='Python'
          description={pythonDescription}
        />
        <Skill
          fab
          iconName='wordpress'
          color='#21759b'
          title='Wordpress'
          description={wordpressDescription}
        />
      </MDBRow>
    </CardContainer>
  );
};

export default SkillsList;
