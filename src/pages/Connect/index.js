/* src/pages/StabilityPool.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';
import Connects from './Connect'

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const Container = styled.div`
width: 652px;
margin: auto;
margin-Top: 200px;
`;

/* Main Component */
const Connect = props => {
    /* Props */
    const {
        className,
    } = props;

    /* Renderer */
    return (
        <Container className={ className }>
            <Connects />
        </Container>
    );
}

/* Main Component Settings */
Connect.propTypes = {
    className: PropTypes.string,
}

/* Exports */
export default Connect;