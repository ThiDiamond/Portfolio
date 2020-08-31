import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';
import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, matchPath } from 'react-router-dom';
import { navAbout, navHome, navSkills, navCredits } from './content';
import Intro from './Intro';
import LanguageContext from '../contexts/Language';

const NavRoutes = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { language } = useContext(LanguageContext);
  const isItemActive = (path) =>
    matchPath(window.location.pathname, { path, exact: true }) ? true : false;

  const handleNavClick = () => {
    const element = document.getElementById('intro-end');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setCollapsed(!collapsed);
  };

  const NavLink = ({ to, label, isHome }) => {
    const isActive = isHome
      ? isItemActive('/home') || isItemActive('/')
      : isItemActive(to);
    return (
      <MDBNavItem active={isActive}>
        <MDBNavLink exact to={to} onClick={handleNavClick}>
          {label}
        </MDBNavLink>
      </MDBNavItem>
    );
  };

  const handleTogglerClick = () => setCollapsed(!collapsed);

  const navStyle = {};
  const overlay = <div id="sidenav-overlay" onClick={handleTogglerClick} />;

  return (
    <div>
      <Router>
        <div>
          <MDBNavbar
            color="primary-color"
            style={navStyle}
            dark
            expand="md"
            fixed="top"
            scrolling
            transparent
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <MDBIcon
                  className="light-steel-text"
                  size="2x"
                  fab
                  icon="react"
                />
              </MDBNavbarBrand>
              <MDBNavbarBrand>
                <strong className="white-text">Thiago Santana</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={handleTogglerClick} />
              <MDBCollapse isOpen={collapsed} navbar>
                <MDBNavbarNav left>
                  <NavLink to="/home" isHome label={navHome[language]} />
                  <NavLink to="/about" label={navAbout[language]} />
                  <NavLink to="/skills" label={navSkills[language]} />
                  <NavLink to="/portfolio" label="Portfolio" />

                  <NavLink to="/credits" label={navCredits[language]} />
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {collapsed && overlay}
        </div>
        <Intro />
        <main>{children}</main>
      </Router>
    </div>
  );
};

export default NavRoutes;
