import { MDBContainer } from 'mdbreact';
import React from 'react';
import Footer from './components/Footer';
import Intro from './components/Intro';
import NavHeader from './components/NavHeader';
import Routes from './Routes';
const App = () => (
  <>
    <NavHeader>
      <Intro />
      <MDBContainer>
        <Routes />
      </MDBContainer>
    </NavHeader>
    <Footer />
  </>
);

export default App;
