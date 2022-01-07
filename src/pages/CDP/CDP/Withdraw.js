import React from 'react';

// ** Property Components
import {DepositCard} from "../../../components/Card"
import {ThreeLineText} from "../../../components/Text";
import {LatDropdowns} from "../../../components/Dropdown"
import {TokenCard} from "../../../components/Card";
import {PrecautionCard} from "../../../components/Card";
import {ConfirmButton} from "../../../components/Button";

const Withdraw = () => {
    return <div>
        <DepositCard height="142px">
            <ThreeLineText type="Collateral" number="200.05434533"/>
            <LatDropdowns/>
        </DepositCard>
        <DepositCard height="142px">
            <ThreeLineText type="Debt" name="Balance:" number="3046.99"/>
            <TokenCard symbol="LAI" name="LAI"/>
        </DepositCard>
        <PrecautionCard text="You need 10.03 LUSD more to close your CDP."/>
        <ConfirmButton width="100%" fontSize="18px">Confirm</ConfirmButton>
    </div>;
};

export default Withdraw;