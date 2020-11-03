import { MDBRow } from 'mdbreact';
import React, { useContext } from 'react';
import code from '../../assets/code.jpg';
import house from '../../assets/house.jpg';
import python from '../../assets/python.jpg';
import lock from '../../assets/lock.jpg';
import buildbox from '../../assets/buildbox.jpeg';

import { projectsTitle } from './content';
import Project from './Project';
import LanguageContext from '../../contexts/Language';

const Projects = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        {projectsTitle[language]}
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5"></p>

      <MDBRow className="d-flex justify-content-center">
        <Project
          fab
          iconName="node-js"
          iconColor="#639a58"
          title="API Challenge Bossabox"
          image={code}
          codeLink="https://github.com/ThiDiamond/BossaBoxBackend/"
          docLink="https://thidiamond-bossabox-api.herokuapp.com/docs"
        />
        <Project
          fab
          iconName="python"
          iconColor="#a2ce24"
          title="URI Online Judge Challenges"
          image={python}
          codeLink="https://github.com/ThiDiamond/Uri"
        />
        <Project
          fab
          iconName="react"
          iconColor="#00D8FF"
          title="Real Estate Website"
          image={house}
          codeLink="https://github.com/ThiDiamond/RealEstate/"
          siteLink="http://thidiamond.tech/"
        />

        <Project
          iconName="lock"
          iconColor="#FDAC21"
          title="JWT Auth App"
          image={lock}
          codeLink="https://github.com/ThiDiamond/jwt-frontend"
          siteLink="https://thidiamond-jwt-auth.netlify.app/"
        />
        <Project
          iconName="react"
          fab
          iconColor="#00D8FF"
          title="Buildbox Web Challenge"
          image={buildbox}
          codeLink="https://github.com/ThiDiamond/web-developer-challenge"
          siteLink="https://thidiamond-buildbox.netlify.app/"
        />
      </MDBRow>
    </section>
  );
};

export default Projects;
