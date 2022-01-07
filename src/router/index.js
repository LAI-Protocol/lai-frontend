import React from 'react'
import {Routes, Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';

// Router
import {BrowserRouter} from 'react-router-dom';
import HomeLayoutRoute from "./HomeLayoutRoute";
import AppLayoutRoute from "./AppLayoutRoute";

// styled-components
const Container = styled.div`
    position: relative;
    display: flex;
`

// ** Merge Routes
export default () => {
    return (
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path="/main/*" element={<HomeLayoutRoute/>}/>
                    <Route path="/app/*" element={<AppLayoutRoute/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}



