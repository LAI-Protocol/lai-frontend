/* src/pages/StabilityPool.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';
import Stability from './StabilityPool'

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const Container = styled.div`
    width: 652px;
    margin: 0 auto;
`;

/* Main Component */
const StabilityPool = props => {
    /* Props */
    const {
        className,
    } = props;

    /* Renderer */
    return (
        <Container className={className}>
            <Stability/>
        </Container>
    );
}

/* Main Component Settings */
StabilityPool.propTypes = {
    className: PropTypes.string,
}

/* Exports */
export default StabilityPool;