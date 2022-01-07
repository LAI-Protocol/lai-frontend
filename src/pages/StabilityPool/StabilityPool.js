import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {CDPTitle} from "../../components/Title";
import {CDPCard} from "../../components/Card";
import {HorizontalText, HorizontalDoubleText, TwoLineTextB} from "../../components/Text";
import {ConfirmButton, StakeButton, WithdrawButton} from "../../components/Button";
import {StabilityStakeModal, StabilityUnstakeModal} from "../../components/Modal";

const StyledDiv = styled.div`
    margin: 0 auto;
    > div {
    margin-bottom: 20px;
    }
`

const StyledCard = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Value = styled.div`
`

const Stability = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const stakeModal = () => setModalShow(true);
    const unstakeModal = () => setModalShow2(true);

    const [data, setData] = useState([]);
    const [totalStakedLAI, setTotalStakedLAI] = useState(0);
    const [yourPoolShare, setYourPoolShare] = useState(0);
    const [LAOApr, setLAOApr] = useState(0);
    const [rewardLAO, setRewardLAO] = useState(0);
    const [rewardLAT, setRewardLAT] = useState(0);
    const [LAIStaked, setLAIStaked] = useState(0);


    useEffect(() => {
        axios.get("http://lai.com/data/data.json")
            .then(({ data }) => setData(data.data));
    }, []);

    const saveValue = () => {
        // setTotalStakedLAI("1");
        // setYourPoolShare();
        // setLAOApr();
        // setRewardLAO();
        // setRewardLAT();
        // setLAIStaked();
    };

    saveValue();

    return <StyledDiv>
        <StabilityStakeModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <StabilityUnstakeModal show={modalShow2}
                               onHide={() => setModalShow2(false)}
                               symbol="LAI"/>
        <CDPTitle text="Stability Pool"/>
        <CDPCard display="block" padding="0 20px 25px">
            <HorizontalText name="Total Staked LAI" value={"0"} />
            <HorizontalText name="Your Pool Share" value="0.00234%"/>
            <HorizontalText name="LAO APR" value="128.50%"/>
            <HorizontalDoubleText mt="10px" color="#08B8DE" colorB="#E9B200" name="Reward" value1="260.00LAO"
                                  value2="260.00LAT"/>
        </CDPCard>
        <CDPCard display="flex" padding="20px 20px">
            <TwoLineTextB fontSize="14px" name="LAI Staked" value="60.09"/>
            <StakeButton sign="Minus" modalName="unstakeModal" unstakeModal={unstakeModal}>UnStake</StakeButton>
            <StakeButton sign="Plus" modalName="stakeModal" stakeModal={stakeModal}>Stake</StakeButton>
        </CDPCard>
        <StyledCard>
            <WithdrawButton>Claim LAT and LAO</WithdrawButton>
            <ConfirmButton width="45%" fontSize="16px">Claim LAO and Move LAT to CDP</ConfirmButton>
        </StyledCard>
        <div>
            {data.map((d, index) => (
                <Value key={index}>
                <p>totalStakedLai: {d.totalStakedLai}</p>
                <p>yourPoolShare: {d.yourPoolShare}</p>
                <p>LAOApr: {d.LAOApr}</p>
                <p>rewardLAO: {d.rewardLAO}</p>
                <p>rewardLAT: {d.rewardLAT}</p>
                <p>LAIStaked: {d.LAIStaked}</p>
                </Value>
                ))}
        </div>
    </StyledDiv>;
};

export default Stability;



