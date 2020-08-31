import { MDBContainer } from "mdbreact";
import React from "react";
import Footer from "./FixedApp/Footer";
import NavRoutes from "./FixedApp/NavRoutes";
import Routes from "./Routes";
import { LanguageProvider } from "./contexts/Language";
const App = () => (
  <>
    <LanguageProvider>
      <NavRoutes>
        <MDBContainer>
          <Routes />
        </MDBContainer>
      </NavRoutes>
      <Footer />
    </LanguageProvider>
  </>
);

export default App;
