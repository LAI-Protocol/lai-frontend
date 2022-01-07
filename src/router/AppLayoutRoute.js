import React from "react";
import {Route, Routes} from 'react-router-dom';

// Layout
import {AppLayout} from "../layouts";

// Pages
import Dashboard from "../pages/Dashboard";
import CDP from "../pages/CDP/index";
import StabilityPool from "../pages/StabilityPool/index";
import Stake from "../pages/Stake/index";
import Liquidation from "../pages/Liquidation/index";
import Governance from "../pages/Governance";
import Connect from "../pages/Connect/index";

const AppLayoutRoute = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/cdp" element={<CDP/>}/>
                <Route path="/stabilitypool" element={<StabilityPool/>}/>
                <Route path="/stake" element={<Stake/>}/>
                <Route path="/liquidation" element={<Liquidation/>}/>
                <Route path="/governance" element={<Governance/>}/>
                <Route path="/connect" element={<Connect/>}/>
            </Routes>
        </AppLayout>
    );
};

export default AppLayoutRoute;