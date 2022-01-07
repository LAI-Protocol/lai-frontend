import React from 'react';

// ** Property Components
import {DepositCard} from "../../../components/Card"
import {ThreeLineText} from "../../../components/Text";
import {LatDropdowns} from "../../../components/Dropdown"
import {TokenCard} from "../../../components/Card";
import {HorizontalText} from "../../../components/Text";
import {PrecautionCard} from "../../../components/Card";
import {ConfirmButton} from "../../../components/Button";

const Deposit = () => {
    return <div>
        <DepositCard height="142px">
            <ThreeLineText type="Collateral" number="200.05434533"/>
            <LatDropdowns/>
        </DepositCard>
        <DepositCard height="142px">
            <ThreeLineText type="Debt" name="Balance:" number="3046.99"/>
            <TokenCard symbol="LAI" name="LAI"/>
        </DepositCard>
        <div>
            <HorizontalText name="Liquidation Reserve" value="200LAI" symbol="Exclamation" mt="0"/>
            <HorizontalText name="Borrowing Fee" value="0.00LAI(0.50%)"/>
            <HorizontalText name="Total debt" value="260LAI"/>
            <HorizontalText name="Collateral ratio" value="115.8%" color="rgba(249, 190, 0, 1)"/>
            <HorizontalText name="Liquidation price (Normal mode)" value="$1,239.33"/>
        </div>
        <PrecautionCard text="Total debt must be at least 2000 LAI."/>
        <PrecautionCard text="Keeping your CR above 150% can help avoid
            liquidation under Recovery Mode."/>
        <ConfirmButton width="100%" fontSize="18px">Confirm</ConfirmButton>
    </div>;
};

export default Deposit;