import React, { useContext } from 'react';
import { MDBBtn } from 'mdbreact';
import Brazil from '../assets/Brazil';
import Usa from '../assets/Usa';
import LanguageContext from '../contexts/Language';
const LanguageSwitch = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const getClassname = (lang) => (lang === language ? '' : 'inactive');
  return (
    <div style={{}} className="d-flex justify-content-center">
      <MDBBtn
        className={getClassname('pt')}
        size="md"
        onClick={() => setLanguage('pt')}
      >
        <Brazil />
      </MDBBtn>
      <MDBBtn
        className={getClassname('en')}
        size="md"
        onClick={() => setLanguage('en')}
      >
        <Usa />
      </MDBBtn>
    </div>
  );
};

export default LanguageSwitch;
