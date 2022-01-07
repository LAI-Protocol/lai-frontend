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

const LAI = () => {
    return <div>
        <DashboardTitle symbol="LAI" text="LAI" name="Price" value="$ 1.0190" color="#08B8DE"/>
        <DashboardCard>
            <HorizontalLeftText name="Total Supply" value="13.8M" color="#08B8DE"/>
            <HorizontalLeftText name="LAI in Stability Pool" value="7.52M" color="#08B8DE"/>
            <StyledDiv>
                <DashboardButton sign="OutputGreen" color="#557A82">Borrow</DashboardButton>
                <DashboardButton sign="InputGreen" color="#557A82">CDP</DashboardButton>
            </StyledDiv>
        </DashboardCard>
    </div>;
};

export default LAI;



