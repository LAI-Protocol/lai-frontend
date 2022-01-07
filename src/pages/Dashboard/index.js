/* src/pages/CDP */
/* React */
import React from 'react';
// import { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

// ** Third Party Imports
// import axios from 'axios'

// ** Area Components
import LAI from './LAI'
import LAO from './LAO'
import Statistics from '../CDP/Statistics'

// ** Element Component

/* Style */
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap'

/* Styled Components */
const Container = styled.div`
    width: 1304px;
`

const StyledCol = styled(Col)`
    width: 50%;
`

/* Main Component */
const  Dashboard = props => {
    /* Props */
    const {
        className,
    } = props;

    /* Renderer */
    return (
        <Container>
            <Row>
                <StyledCol>
                    <LAI />
                    <LAO />
                </StyledCol>
                <StyledCol>
                    <Statistics />
                </StyledCol>
            </Row>
        </Container>
    );
}

/* Main Component Settings */
Dashboard .propTypes = {
    className: PropTypes.string,
}

/* Exports */
export default Dashboard