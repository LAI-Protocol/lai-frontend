import React from 'react'
import styled from "styled-components";
import {Navbar, Nav} from 'react-bootstrap'
import {ReactComponent as LaiLogoLight} from '../../assets/images/icon/logo/LAI-Logo-Dark.svg'
import {HeaderButton} from "../../components/Button";

const StyledNavbar = styled(Navbar)`
    position: fixed !important;
    width: 100%;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 6px 0 18px rgba(255, 255, 255, 0.1);
    .navbar-brand {
        display: inline-block;
    }
`
const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1420px;
    margin: 0 auto;
`

const StyledNav = styled(Nav)`
    align-items: center;
    font-family: Poppins;
    font-weight: 600;
    font-size: 17px;
    line-height: 78.78%;
    text-align: right;
    .nav-link {
        padding: 0;
    }
    a {
        margin-left: 90px;
    }
    > a:nth-of-type(4) {
        position:relative;
        left: 10px;
        margin-left: 40px;
    }
    span {
    color: #000000;
    }
`

export default () => {

    return (
        <StyledNavbar>
            <StyledDiv>
                <Navbar.Brand href="/main"><LaiLogoLight/></Navbar.Brand>
                <StyledNav style={{color:"#000000"}}>
                    <Nav.Link href="#"><span>DOCS</span></Nav.Link>
                    <Nav.Link href="#"><span>LAI</span></Nav.Link>
                    <Nav.Link href="#"><span>Token</span></Nav.Link>
                    <Nav.Link href="#"><HeaderButton width={"158px"} height={"50px"} color={"#ffffff"}
                                                     bgColor={"#000000"} fontSize={"18px"}>App</HeaderButton>
                    </Nav.Link>
                </StyledNav>
            </StyledDiv>
        </StyledNavbar>
    )

}