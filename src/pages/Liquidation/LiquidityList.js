import React from 'react';
import styled from 'styled-components';
import {CDPTitle} from "../../components/Title";
import {Table} from "../../components/Table";

const StyledCard = styled.div`
    width: 100%;
    border: 1px solid white;
    border-radius: 15px;
`

const LiquidationList = () => {
    return <div>
        <CDPTitle text="Liquidity List"/>
        <StyledCard>
            <Table/>
        </StyledCard>
    </div>;
};

export default LiquidationList