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
import { navAbout, navHome, navSkills } from './content';
import Intro from './Intro';

class NavRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  NavLink = ({ to, label, isHome }) => {
    const isActive = isHome
      ? this.isItemActive('/home') || this.isItemActive('/')
      : this.isItemActive(to);
    return (
      <MDBNavItem active={isActive}>
        <MDBNavLink exact to={to} onClick={this.handleNavClick}>
          {label}
        </MDBNavLink>
      </MDBNavItem>
    );
  };
  handleNavClick = () => {
    const element = document.getElementById('intro-end');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const collapsed = false;
    this.setState({ collapsed });
  };

  isItemActive = (path) =>
    matchPath(window.location.pathname, { path, exact: true }) ? true : false;
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
    const { NavLink } = this;
    const navStyle = {};
    const overlay = (
      <div id='sidenav-overlay' onClick={this.handleTogglerClick} />
    );
    const { collapsed } = this.state;

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
                    <NavLink to='/home' isHome label={navHome} />
                    <NavLink to='/about' label={navAbout} />
                    <NavLink to='/skills' label={navSkills} />
                    <NavLink to='/portfolio' label='Portfolio' />
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
