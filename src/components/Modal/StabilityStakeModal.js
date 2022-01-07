import React from 'react';
import styled from 'styled-components';
import {Modal} from 'react-bootstrap'
import {ConfirmButton} from "../Button";
import {DepositCard} from "../../components/Card"
import {TokenCard} from "../../components/Card";
import {HorizontalText, ThreeLineText} from "../Text";
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
    .modal-header {
    border-bottom: 0;
    }
    .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 0;
    margin-bottom: 0;
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

const StabilityStakeModal = (props) => {
    return (
        <StyledModal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Stake
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DepositCard height="211px">
                    <ThreeLineText type="Stake" name="Balance:" number="3046.99"/>
                    <TokenCard symbol="LAI" name="LAI" />
                </DepositCard>
                <HorizontalText mt="0" fontSize="25px" name="Collateral ratio" value="1202.0340 LAI"/>
            </Modal.Body>
            <Modal.Footer>
                <ConfirmButton width="100%" fontSize="18px">Confirm</ConfirmButton>
            </Modal.Footer>
        </StyledModal>
    );
}

export default StabilityStakeModal;