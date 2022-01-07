import React from 'react';
import styled from 'styled-components';
import {Modal} from 'react-bootstrap'
import SamuraiLogo from "../../assets/images/wallet/Samurai-logo.png"
import LAITokenLogo from "../../assets/images/wallet/LAIToken-logo.png"
import Rectangle from "../../assets/images/wallet/Rectangle.png"
import Outline from "../../assets/images/wallet/Outline.png"
/* Main Component */

const StyledModal = styled(Modal)`
    .modal-dialog {
    max-width: 610px;
    }
    .modal-content {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  
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
            > img:first-child {
            margin-right: 40px;
            }
            > img:last-child {
            margin-left: 40px;
            }
        }
}
`

const ConnectWalletModal = (props) => {
    return (
        <StyledModal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <img alt="SamuraiLogo" src={SamuraiLogo}/>
                <span>
                    <img alt="Rectangle" src={Rectangle}/>
                    <img alt="Rectangle" src={Rectangle}/>
                    <img alt="Outline" src={Outline}/>
                </span>
                <img alt="LAITokenLogo" src={LAITokenLogo}/>
            </Modal.Body>
        </StyledModal>
    );
}

export default ConnectWalletModal;