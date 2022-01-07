import React from 'react';
import styled from 'styled-components';
import {DashboardTitle} from "../../components/Title";
import {DashboardCard} from "../../components/Card";
import {HorizontalLeftText} from "../../components/Text";
import {DashboardButton} from "../../components/Button";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`

const LAO = () => {
    return <div>
        <DashboardTitle symbol="LAO" text="LAO" name="Price" value="$ 1.0190" color="#FF56A9"/>
        <DashboardCard>
            <HorizontalLeftText name="Circulating Supply" value="10.5M(1.05%)" color="#FF56A9"/>
            <HorizontalLeftText name="Currently Burned" value="2.07M(19.60%)" color="#FF56A9"/>
            <HorizontalLeftText name="Staked LAO" value="45.98M(2.58%)" color="#FF56A9"/>
            <StyledDiv>
                <DashboardButton sign="OutputRed" color="#733553">Borrow</DashboardButton>
                <DashboardButton sign="InputRed" color="#733553">CDP</DashboardButton>
                <DashboardButton sign="Speaker" color="#733553">Goverment</DashboardButton>
            </StyledDiv>
        </DashboardCard>
    </div>;
};

export default LAO;