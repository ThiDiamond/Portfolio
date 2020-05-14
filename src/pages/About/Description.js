import React from 'react';
import image from '../../assets/thiago.jpeg';
import CardContainer from '../../components/CardContainer';
import { about } from '../../Texts';
import { returnLanguage } from '../../utils';
const Description = () => {
  const description = returnLanguage(about);
  return (
    <CardContainer>
      <img src={image} className='img-fluid z-depth-2 rounded-circle' alt='' />
      <h2 className='h2-responsive font-weight-bold my-5'>Thiago Santana</h2>
      {description.map((paragraph, idx) => (
        <p
          key={idx}
          className='lead black-text text-justify w-responsive mx-auto'
        >
          {paragraph}
        </p>
      ))}
    </CardContainer>
  );
};

export default Description;
