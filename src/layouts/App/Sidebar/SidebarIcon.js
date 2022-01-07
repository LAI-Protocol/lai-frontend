import React from 'react';

// 일반적인 아이콘
import Dashboard from "../../../assets/images/icon/menu/Dashboard.png";
import Cdp from "../../../assets/images/icon/menu/CDP.png";
import StabilityPool from "../../../assets/images/icon/menu/StabilityPool.png";
import Stake from "../../../assets/images/icon/menu/Stake.png";
import Liquidation from "../../../assets/images/icon/menu/Liquidation.png";
import Governance from "../../../assets/images/icon/menu/Governance.png";

// 선택시 활성화된 아이콘
import sDashboard from "../../../assets/images/icon/menu/sDashboard.png";
import sCdp from "../../../assets/images/icon/menu/sCDP.png";
import sStabilityPool from "../../../assets/images/icon/menu/sStabilityPool.png";
import sStake from "../../../assets/images/icon/menu/sStake.png";
import sLiquidation from "../../../assets/images/icon/menu/sLiquidation.png";
import sGovernance from "../../../assets/images/icon/menu/sGovernance.png";

const SidebarIcon = (props) => {

    const icons = [Dashboard, Cdp, StabilityPool, Stake, Liquidation,Governance, sDashboard, sCdp, sStabilityPool, sStake, sLiquidation, sGovernance]

    return (
        <img alt="icon" src={icons[props.value]} />
    );
}

export default SidebarIcon;