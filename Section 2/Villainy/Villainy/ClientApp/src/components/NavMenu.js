import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <LinkContainer to={'/'} exact>
                        <NavItem>
                            Home
                         </NavItem>
                    </LinkContainer>
                </li>
                <li class="nav-item">
                    <LinkContainer to={'/FellowVillains'}>
                        <NavItem>
                            Villains
                        </NavItem>
                    </LinkContainer>
                </li>
                <li class="nav-item">
                    <LinkContainer to={'/myprofile'}>
                        <NavItem>
                            Me
                        </NavItem>
                    </LinkContainer>
                </li>
                <li class="nav-item">
                    <LinkContainer to={'/signin'}>
                        <NavItem>
                            Sign In
                        </NavItem>
                    </LinkContainer>
                </li>
            </ul>
        </div>
    </nav>
);
