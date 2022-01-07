import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import SidebarSnsItem from "./SidebarSnsItem";

// Styled Components
const Side = styled.div`
  position: relative;
  width: 256px;
  height: 100%;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 0px 18px rgba(255, 255, 255, 0.1);
`
const Hr = styled.hr`
  margin: 0;
`

const Menu = styled.div`
  margin: 0 22px;
  width: 208px;
`

const SnsMenu = styled.div`
  margin: 32px 0 0 22px;
  width: 208px;
`

function Index() {

    const pathName = useLocation().pathname;

    const menus = [
        { num: 0, sNum: 6 ,name: "Dashboard", path: "/app/dashboard" },
        { num: 1, sNum: 7, name: "CDP", path: "/app/cdp" },
        { num: 2, sNum: 8, name:"Stability Pool", path: "/app/stabilitypool" },
        { num: 3, sNum: 9, name: "Stake", path: "/app/stake"},
        { num: 4, sNum: 10, name: "Liquidation", path: "/app/liquidation"},
        { num: 5, sNum: 11, name: "Governance", path: "/app/governance"}
    ];

    const snsMenu = [
        {name: "Telegram", path: ""},
        {name: "Twitter", path: ""},
        {name: "Medium", path: ""},
        {name: "Connect", path: "/app/connect"},
    ]


    return (
        <Side>
            <Menu>
                {menus.map((menu, index) => {
                    return (
                        <NavLink
                            to={menu.path}
                            key={index}
                        >
                            <SidebarItem
                                menu={menu}
                                isActive={pathName === menu.path}
                                // 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
                            />
                        </NavLink>
                    );
                })}
            </Menu>
            <Hr />
            <SnsMenu>
                {snsMenu.map((snsMenu, index) => {
                    return (
                        <NavLink
                            to={snsMenu.path}
                            key={index}
                        >
                            <SidebarSnsItem
                                snsMenu={snsMenu}
                            />
                        </NavLink>
                    );
                })}
            </SnsMenu>
        </Side>
    );
}

export default Index;