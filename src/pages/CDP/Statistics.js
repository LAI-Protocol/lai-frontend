import React from 'react'

//** Components
import {CDPTitle} from "../../components/Title";
import {StatisticsCard} from "../../components/Card"
import {HorizontalText} from "../../components/Text";

const Statistics = () =>{
    return <div>
        <CDPTitle text="LAI Protocol statistics" ml="94px" />
        <StatisticsCard>
            <HorizontalText name="CDPs" value="500" fontWeight="400" />
            <HorizontalText name="TVL" value="474,000LAT(%1.10M)" fontWeight="400" />
            <HorizontalText name="Borrowing Fee" value="0.50%" fontWeight="400" />
            <HorizontalText name="Total Collateral Ratio" value="272.8%" fontWeight="400" />
            <HorizontalText name="Recovery Mode" value="No" fontWeight="400" />
            <HorizontalText name="Recovery Mode Price Threshold" value="$1.298.25" fontWeight="400" />
            <HorizontalText name="LAT price" value="$0.12" fontWeight="400" />
            <HorizontalText name="Borrowing Fee" value="12.091LAT($1.00M)" fontWeight="400" />
        </StatisticsCard>
    </div>;
};

export default Statistics;