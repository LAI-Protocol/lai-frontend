import React from "react";
import {Route, Routes} from 'react-router-dom';

// Layout
import {HomeLayout} from "../layouts";

// Pages
import Home from "../pages/Home/Home";

const HomeLayoutRoute = () => {
    return (
        <HomeLayout>
            <Routes>
                <Route path="" element={<Home />} />
            </Routes>
        </HomeLayout>
    );
};

export default HomeLayoutRoute;