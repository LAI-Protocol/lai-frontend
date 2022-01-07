/* src/pages/StabilityPool.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';
import Stakes from './Stake'

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const Container = styled.div`
    width: 652px;
    margin: 0 auto;
`;

/* Main Component */
const Stake = props => {
    /* Props */
    const {
        className,
    } = props;

    /* Renderer */
    return (
        <Container className={className}>
            <Stakes/>
        </Container>
    );
}

/* Main Component Settings */
Stake.propTypes = {
    className: PropTypes.string,
}

/* Exports */
export default Stake;