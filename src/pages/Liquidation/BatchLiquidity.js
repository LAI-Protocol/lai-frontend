import React from 'react';
import styled from 'styled-components';
import {CDPTitle} from "../../components/Title";
import {CDPCard} from "../../components/Card";
import {LiquidationButton} from "../../components/Button";

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Livvic;
    font-weight: 500;
    font-size: 20px;
    line-height: 200%;
    text-align: left;
    > * {
    margin-left: 20px;
    }
    > button {
    margin-left: 50px;
    }
`
const StyledInput = styled.input`
    height: 56px;
    border: 0;
    background-color: #000000;
    color: #ffffff;
    font-family: Livvic;
    font-weight: 500;
    font-size: 20px;
    line-height: 200%;
    :focus {outline: none;}
    text-align: right;
    ::placeholder {color: #ffffff;}
`

const BatchLiquidity = () => {
    return <div>
        <CDPTitle text="Batch liquidity"/>
        <CDPCard display="flex" padding="40px 32px">
            <StyledDiv>I want to liquidate</StyledDiv>
            <StyledDiv>
                <StyledInput type="text" placeholder="00.00"/>
                <p>CDPs in turn.</p>
                <LiquidationButton width="321px">Batch Liquidate</LiquidationButton>
            </StyledDiv>
        </CDPCard>
    </div>;
};

export default BatchLiquidity;