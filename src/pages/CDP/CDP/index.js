import React from 'react';

// ** Content Components
import Deposit from '../CDP/Deposit'
import Withdraw from "./Withdraw";
import Redemption from "./Redemption";

// ** Property Components
import {CDPTitle} from "../../../components/Title";
import {BasicTabs} from "../../../components/Tab"

const Index = () => {
    return <div>
        <CDPTitle text="CDP" />
        <BasicTabs children1={<Deposit/>} children2={<Withdraw/>} children3={<Redemption/>}/>
    </div>
};


export default Index;