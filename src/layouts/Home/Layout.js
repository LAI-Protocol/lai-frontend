import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import Footer from "./Footer"
import HomeBackground from '../../assets/images/home/HomeBackground.svg'

const Container = styled.div`
    width: 100%;
    background:url(${HomeBackground}); 
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: #ffffff;
`

const Content = styled.div`
`

const HomeLayout = ({children}) => {
    return <>
        <Container>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </Container>
    </>;
}

export default HomeLayout;