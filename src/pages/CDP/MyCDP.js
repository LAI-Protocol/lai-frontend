import React from 'react';

// ** Components
import {CDPTitle} from "../../components/Title";
import {CDPCard} from "../../components/Card"
import {TwoLineText} from "../../components/Text";

const MyCDP = () => {
    return <div>
        <CDPTitle text="MyCDP" />
        <CDPCard display="flex" padding="20px 32px">
            <TwoLineText name="Collateral(LAT)" value="0.0000 ≈ 0.000 LAI" textAlign="left"/>
            <TwoLineText name="Collateral ratio" value="140" color="#08B8DE" textAlign="center"/>
            <TwoLineText name="Debt(LAI)" value="0.0000" textAlign="right"/>
        </CDPCard>
    </div>;
};

export default MyCDP;