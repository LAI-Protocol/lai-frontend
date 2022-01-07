import React from 'react';
import styled from 'styled-components';
import {Modal} from 'react-bootstrap'
import {HeaderButton} from "../Button";
import SamuraiLogo from "../../assets/images/wallet/Samurai-logo.png"

/* Main Component */

const StyledModal = styled(Modal)`
    .modal-dialog {
    max-width: 610px;
    }
    .modal-content {
    position: relative;
    width: 610px;
    height: 440px;
    pointer-events: auto;
    background-color: #000000;
    background-clip: border-box;
    border: 0;
    border-radius: 32px;
    box-shadow: 6px 0px 18px rgba(155, 155, 155, 0.25);
    outline: 0;
        .modal-body {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px 0 30px;
            a {
            color: #08B8DE;
            font-family: Livvic;
            font-weight: 600;
            font-size: 20px;
            line-height: 120%;
            text-decoration-line: underline;
            font-feature-settings: 'pnum' on, 'lnum' on;
            }
            button {
            display: inline;
            margin: 20px 0;
            }
        }
}
`

const ConnectCompleteModal = (props) => {
    return (
        <StyledModal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <img alt="SamuraiLogo" src={SamuraiLogo}/>
                <a href="https://polkascan.io/">lat2322****dede10239</a>
                <HeaderButton width={"136px"} height={"56px"} bgColor={"#ffffff"} color={"#000000"} fontSize={"20px"}>Disconnect</HeaderButton>
            </Modal.Body>
        </StyledModal>
    );
}

export default ConnectCompleteModal;