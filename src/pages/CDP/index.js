/* src/pages/CDP */
/* React */
import React from 'react';
// import { Fragment, useState, useEffect } from 'react'
// import PropTypes from 'prop-types';

// ** Third Party Imports
// import axios from 'axios'

// ** Area Components
import MyCDP from './MyCDP'
import Index from './CDP'
import Statistics from './Statistics'

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
const  CDP= () => {
    return (
        <Container>
            <Row>
                <MyCDP />
            </Row>
            <Row>
                <StyledCol>  <Index /></StyledCol>
         <StyledCol>   <Statistics /></StyledCol>

            </Row>
        </Container>
    );
}

// /* Main Component Settings */
//  CDP.propTypes = {
// }

/* Exports */
export default CDP;