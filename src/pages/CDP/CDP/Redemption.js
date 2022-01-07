import React from 'react';
import styled from "styled-components";

// ** Property Components
import {DepositCard} from "../../../components/Card"
import {ThreeLineText} from "../../../components/Text";
import {LatDropdowns} from "../../../components/Dropdown"
import {TokenCard} from "../../../components/Card";
import {PrecautionCard} from "../../../components/Card";
import {ConfirmButton, WithdrawButton} from "../../../components/Button";
import {RedemptionModal} from "../../../components/Modal";

const StyledCard = styled.div`
    display: flex;
    justify-content: space-between;
`

const Redemption = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const modalButton = () => setModalShow(true);
    return <div>
        <RedemptionModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <DepositCard height="142px">
            <ThreeLineText type="Collateral" number="200.05434533"/>
            <LatDropdowns/>
        </DepositCard>
        <DepositCard height="142px">
            <ThreeLineText type="Debt" name="Balance:" number="3046.99"/>
            <TokenCard symbol="LAI" name="LAI"/>
        </DepositCard>
        <PrecautionCard color="rgba(255, 0, 0, 1)" sign="CautionRed"
                        text="Note: Redemption is not for repaying your loan."/>
        <StyledCard>
            <WithdrawButton>Back to Withdraw</WithdrawButton>
            <ConfirmButton width="45%" fontSize="16px" modalButton={modalButton}>Confirm</ConfirmButton>
        </StyledCard>
    </div>;
};

export default Redemption;