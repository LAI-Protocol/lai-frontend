import React from 'react';
import styled from 'styled-components';
import {Container, Modal} from 'react-bootstrap'
import CautionLg from "../../assets/images/icon/sign/Caution-lg.png";
import {ConfirmButton, WithdrawButton} from "../Button";
/* Main Component */

const StyledModal = styled(Modal)`
    .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 651px;
    height: 349px;
    pointer-events: auto;
    background-color: #000000;
    background-clip: border-box;
    border: 0;
    border-radius: 0;
    outline: 0;
    }
   .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 0;
    margin-bottom: 10px;
    }
    .modal-footer {
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    border-top: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
`

const StyledCard = styled(Container)`
    padding: 0 20px;
    border: 1px solid white;
    border-radius: 10px;
    >img {
    margin: 50px 0 10px;
    }
    >p {
    margin-bottom: 30px;
    color: #9E9E9E;
    font-family: Archivo;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    text-align: left;
    }
`

const StyledCard2 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const RedemptionModal = (props) => {
    return (
        <StyledModal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <StyledCard>
                    <img alt="cautionLg" src={CautionLg}/>
                    <p>Using this function will cause a loss if you don't understand how it works! Learn More!</p>
                    <p>Redemptions are expected to be carried out by bots when arbitrage opportunities emerge(1
                        LAI &lt; 1 USD).</p>
                    <p style={{color: "red"}}>Note: Redemption is not for repaying your loan.</p>
                </StyledCard>
            </Modal.Body>
            <Modal.Footer>
                <StyledCard2>
                    <WithdrawButton onClick={props.onHide}>Back to Withdraw</WithdrawButton>
                    <ConfirmButton width="45%" fontSize="16px" onClick={props.onHide}>Confirm</ConfirmButton>
                </StyledCard2>
            </Modal.Footer>
        </StyledModal>
    );
}

export default RedemptionModal;