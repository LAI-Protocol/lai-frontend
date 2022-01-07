import React from 'react';
import styled from 'styled-components';

import {CDPTitle} from "../../components/Title";
import {CDPCard} from "../../components/Card";
import {HorizontalText, HorizontalDoubleText, TwoLineTextB} from "../../components/Text";
import {ConfirmButton, StakeButton, WithdrawButton} from "../../components/Button";
import {StakeStakeModal, StakeUnstakeModal} from "../../components/Modal";

const StyledDiv = styled.div`
    > div {
    margin-bottom: 20px;
    }
`

const StyledCard = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Stake = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const stakeModal = () => setModalShow(true);
    const unstakeModal = () => setModalShow2(true);
    return <StyledDiv>
        <StakeStakeModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <StakeUnstakeModal show={modalShow2}
                      onHide={() => setModalShow2(false)}/>
        <CDPTitle text="Stake"/>
        <CDPCard display="block" padding="0 20px 25px">
            <HorizontalText name="Total Staked LAO" value="6.28M"/>
            <HorizontalText name="Your Pool Share" value="0.00234%"/>
            <HorizontalText name="APR" value="128.50%"/>
            <HorizontalDoubleText mt="10px" color1="#08B8DE" color2="#FF56A9" name="Reward" value1="260.00LAO" value2="260.00LAI" />
        </CDPCard>
        <CDPCard display="flex" padding="20px 20px">
            <TwoLineTextB fontSize="14px" name="LAI Staked" value="60.09"/>
            <StakeButton sign="Minus" modalName="unstakeModal" unstakeModal={unstakeModal}>UnStake</StakeButton>
            <StakeButton sign="Plus" modalName="stakeModal" stakeModal={stakeModal}>Stake</StakeButton>
        </CDPCard>
        <StyledCard>
            <WithdrawButton >Claim LAT and LAO</WithdrawButton>
            <ConfirmButton width="45%" fontSize="16px">Claim LAO and Move LAT to CDP</ConfirmButton>
        </StyledCard>
    </StyledDiv>;
};

export default Stake;



