import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {ReactComponent as LaiLogoLight} from '../../assets/images/icon/logo/LAI-Logo-Light.svg'
import {HeaderButton} from "../../components/Button";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
    padding: 15px 53px;
    .navbar {
        align-items: center;
        width: 100%;
        height: 80px;
        background-color: #000000;
        box-shadow: 6px 0 18px rgba(255, 255, 255, 0.1);
    }
    .navbar-nav {
        position: relative;
        margin-left: auto;
    }
    .navbar-brand {
        padding-top: 0;
        padding-bottom: 0;
    }
    .nav-home span {
        color: #000000;
    }
    .nav-link {
        padding: 0;
    }
`

const Header = () => {
    return (
        <StyledNavbar className="navbar">
            <Navbar.Brand href="/main"><LaiLogoLight/></Navbar.Brand>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link>
                        <HeaderButton width={"198px"} height={"50px"} color={"#000000"} bgColor={"#ffffff"}
                                      fontSize={"18px"}>Connect a wallet</HeaderButton>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </StyledNavbar>
    );
}

export default Header;