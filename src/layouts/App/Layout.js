import React from 'react';
import styled from 'styled-components';
import Header from './Header'
import Sidebar from "./Sidebar";

const Container = styled.div`
    width: 100%;
`
const Content = styled.div`
    display: flex;
    max-width: 1920px;
    height: 1240px;
`
const Content2 = styled.div`
    width: 1304px;
    margin: 100px auto;
`

const AppLayout = ({children}) => {
    return <>
        <Container>
            <Header/>
            <Content>
                <Sidebar/>
                <Content2>
                {children}
                </Content2>
            </Content>
        </Container>
    </>;
}

export default AppLayout;