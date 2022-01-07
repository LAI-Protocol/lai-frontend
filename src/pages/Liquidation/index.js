/* src/pages/CDP */
/* React */
import React from 'react';
// import { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types';

// ** Third Party Imports
// import axios from 'axios'

// ** Area Components
import LiquidityList from './LiquidityList'
import BatchLiquidity from "./BatchLiquidity";

// ** Element Component

/* Style */
import styled from 'styled-components';

/* Styled Components */
const Container = styled.div`
        width: 1304px;
`

/* Main Component */
const  Index= props => {
    /* Props */
    const {
        className,
    } = props;

    /* Renderer */
    return (
        <Container className={ className }>
            <BatchLiquidity />
            <LiquidityList />
        </Container>
    );
}

/* Main Component Settings */
Index.propTypes = {
    className: PropTypes.string,
}

/* Exports */
export default Index;