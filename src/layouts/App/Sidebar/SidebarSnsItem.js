import React from "react";
import Round from "../../../assets/images/icon/sns/round.svg"
import styled from "styled-components";

const StyledSidebar = styled.div`
    float: left;
    margin: 0 12px 32px;
    padding: 0;
    font-family: Poppins;
    font-weight: 500;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 27px;
    vertical-align: top;
    img:nth-child(1) {
        margin-right: 18px;
    }
    .active-menu {
        background-origin: content-box;
        background: linear-gradient(to right, rgba(138, 212, 236, 1) 20%, rgba(255, 86, 169, 1) 30%, rgba(246, 124, 220, 1) 45%, rgba(239, 150, 255, 1) 60%, rgba(255, 170, 108, 1)) 70%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

function SidebarSnsItem({ snsMenu }) {

    return (
        <StyledSidebar>
            <img alt="round" src={Round} />
            <span>{snsMenu.name}</span>
        </StyledSidebar>
    );

}

export default SidebarSnsItem;