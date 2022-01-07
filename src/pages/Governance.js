/* src/pages/ Governance.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const Container = styled.div`
    display: flex;
    justify-content: center;
    > p {
    margin: 278px 0;
    font-family: Livvic;
    font-weight: 600;
    font-size: 65px;
    line-height: 86%;
    }
`;

/* Main Component */
const Governance= props => {
    /* Props */
    const {
        className,
    } = props;

    /* Renderer */
    return (
        <Container className={ className }>
            <p>Vote Comming Soon~</p>
        </Container>
    );
}

/* Main Component Settings */
Governance.propTypes = {
    className: PropTypes.string,
}

/* Exports */
export default Governance;