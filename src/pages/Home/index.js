/* src/pages/StabilityPool.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';
import Home from './Home    '

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const Container = styled.div`
`;

/* Main Component */
const Index = props => {
    /* Props */
    const {
        className,
    } = props;

    /* Renderer */
    return (
        <Container className={ className }>
            <Home />
        </Container>
    );
}

/* Main Component Settings */
Index.propTypes = {
    className: PropTypes.string,
}

/* Exports */
export default Index;