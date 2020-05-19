import { MDBContainer } from 'mdbreact';
import React from 'react';
import Footer from './components/Footer';
import NavRoutes from './components/NavRoutes';
import Routes from './Routes';
const App = () => (
  <>
    <NavRoutes>
      <MDBContainer>
        <Routes />
      </MDBContainer>
    </NavRoutes>
    <Footer />
  </>
);

export default App;
