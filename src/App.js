import { MDBContainer } from 'mdbreact';
import React from 'react';
import Footer from './FixedApp/Footer';
import NavRoutes from './FixedApp/NavRoutes';
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
