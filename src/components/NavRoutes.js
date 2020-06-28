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
import React, { Component } from 'react';
import { BrowserRouter as Router, matchPath } from 'react-router-dom';
import { navAbout, navChallenges, navHome } from '../Texts';
import { returnLanguage } from '../utils';
import Intro from './Intro';

class NavRoutes extends Component {
  constructor(props) {
    const { pathname } = window.location;
    super(props);
    const isHome = pathname === '/home' || pathname === '/' ? true : false;
    this.state = {
      collapsed: false,
      isHome,
      isAbout: !isHome,
    };
  }

  handleNavClick = () => {
    const element = document.getElementById('intro-end');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const collapsed = false;
    this.setState({ collapsed });
  };

  isItemActive = (path) =>
    matchPath(window.location.pathname, { path, exact: true });
  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  comnponentDidMount() {
    document.querySelector('nav').style.height = '45px';
  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { children } = this.props;

    const navStyle = {};
    const overlay = (
      <div id='sidenav-overlay' onClick={this.handleTogglerClick} />
    );
    const { collapsed } = this.state;

    const home = returnLanguage(navHome);
    const about = returnLanguage(navAbout);
    const challenges = returnLanguage(navChallenges);

    return (
      <div>
        <Router>
          <div>
            <MDBNavbar
              color='primary-color'
              style={navStyle}
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <MDBIcon
                    className='light-steel-text'
                    size='2x'
                    fab
                    icon='react'
                  />
                </MDBNavbarBrand>
                <MDBNavbarBrand>
                  <strong className='white-text'>Thiago Santana</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem
                      active={
                        this.isItemActive('/home') || this.isItemActive('/')
                      }
                    >
                      <MDBNavLink
                        exact
                        to='/home'
                        onClick={this.handleNavClick}
                      >
                        {home}
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={this.isItemActive('/about')}>
                      <MDBNavLink
                        exact
                        to='/about'
                        onClick={this.handleNavClick}
                      >
                        {about}
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={this.isItemActive('/challenges')}>
                      <MDBNavLink
                        exact
                        to='/challenges'
                        onClick={this.handleNavClick}
                      >
                        {challenges}
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={this.isItemActive('/portfolio')}>
                      <MDBNavLink
                        exact
                        to='/portfolio'
                        onClick={this.handleNavClick}
                      >
                        Portfolio
                      </MDBNavLink>
                    </MDBNavItem>
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
  }
}

export default NavRoutes;
