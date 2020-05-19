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
import { BrowserRouter as Router } from 'react-router-dom';
import { navAbout, navHome } from '../Texts';
import { returnLanguage } from '../utils';

class NavHeader extends Component {
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

  handleNavClick = (isHome, isAbout) => {
    this.setState({ isHome, isAbout });

    const element = document.getElementById('intro-end');
    const block = isHome ? 'end' : 'start';
    element.scrollIntoView({ behavior: 'smooth', block });
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }
  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { children } = this.props;

    const navStyle = { marginTop: '0' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ background: 'black' }}
        onClick={this.handleTogglerClick}
      />
    );

    const { collapsed, isHome, isAbout } = this.state;

    const home = returnLanguage(navHome);
    const about = returnLanguage(navAbout);
    return (
      <div>
        <Router>
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
                  <MDBNavItem active={isHome}>
                    <MDBNavLink
                      exact
                      to='/home'
                      onClick={() => this.handleNavClick(true, false)}
                    >
                      {home}
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem active={isAbout}>
                    <MDBNavLink
                      exact
                      to='/about'
                      onClick={() => this.handleNavClick(false, true)}
                    >
                      {about}
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {collapsed && overlay}
          <main>{children}</main>
        </Router>
      </div>
    );
  }
}

export default NavHeader;
