import React from 'react'
import styled from "styled-components";

// image
import Ins from "../../assets/images/icon/sns/Ins.png"
import Twitter from "../../assets/images/icon/sns/Twitter.png"
import Facebook from "../../assets/images/icon/sns/Facebook.png"
import Github from "../../assets/images/icon/sns/Github.png"
import Raddit from "../../assets/images/icon/sns/Raddit.png"
import Telegram from "../../assets/images/icon/sns/Telegram.png"
import PlatOn from "../../assets/images/icon/partners/PlatON.png"
import PlatOnWorld from "../../assets/images/icon/partners/PlatOnWorld.png"
import Aton from "../../assets/images/icon/partners/Aton.png"
import LatticeX from "../../assets/images/icon/partners/LatticeX.png"

const StyledDiv = styled.div`
    width: 100%;
    height: 960px;
`
const About = styled.div`
    width: 1420px;
    height: 62%;
    margin: 0 auto;
    text-align: left;
    > div {
    padding-top: 25px;
        > img {
        margin-right: 40px;
        }
    }
    > hr { 
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: linear-gradient(to right, #08B8DE 0%, #EF96FF 25%, #FF56A9 63.54%, #F9BE00 88.54%);
    }
`

const AboutTitle = styled.p`
    padding: 200px 0;
    font-family: Poppins;
    font-weight: 900;
    font-size: 65px;
    line-height: 192%;
`

const Partners = styled.div`
    width: 1460px;
    height: 38%;
    margin: 0 auto;
    text-align: center;
    > div {
    display: flex;
    justify-content: space-around;
    }
`

const PartnersTitle = styled.p`
    padding-top: 70px;
    padding-bottom: 20px;
    color: #000000;
    font-family: Poppins;
    font-weight: 600;
    font-size: 65px;
    line-height: 192%;
`

const snsArray = [Ins, Twitter, Facebook, Github, Raddit, Telegram];

const snsImages = snsArray.map(image => {
    return <img alt="snsImg" key={image} src={image} />
});

const partnerArray = [PlatOn, PlatOnWorld, Aton, LatticeX];

const partnerImages = partnerArray.map(image => {
    return <img alt="partnerImg" key={image} src={image} />
});

export default () => {
    return (
        <StyledDiv>
            <About>
                <AboutTitle>About US</AboutTitle>
                <div>
                    {snsImages}
                </div>
                <hr />
            </About>
            <Partners>
                <PartnersTitle>Partners</PartnersTitle>
                <div>
                    {partnerImages}
                </div>
            </Partners>

        </StyledDiv>
    )
}