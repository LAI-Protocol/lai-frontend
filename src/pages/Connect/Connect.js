/* src/pages/ Governance.js */
/* React */
import React from 'react';
import styled from 'styled-components';
import {ConnectWalletModal, ConnectCompleteModal} from '../../components/Modal';

/* Styled Components */
const Container = styled.div`
`;

const StyledButton = styled.button`
    width: 30%;
    height: 70px;
    margin-left: 50px;
    margin-bottom: 10px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    background: transparent;
    color: #ffffff;
    font-family: Archivo;
    font-weight: 600;
    font-size: 16px;
    line-height: 123%;
`

const Connects = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const modalButton = () => setModalShow(true);
    const modalButton2 = () => setModalShow2(true);

    /* Renderer */
    return <div>
        <ConnectWalletModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <ConnectCompleteModal
            show={modalShow2}
            onHide={() => setModalShow2(false)}
        />
        <Container>
            <StyledButton onClick={modalButton}>Connecting...</StyledButton>
            <StyledButton onClick={modalButton2}>Complete !</StyledButton>
        </Container>
    </div>;
};

export default Connects;