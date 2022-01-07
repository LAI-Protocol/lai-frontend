import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Dropdown, Button } from 'react-bootstrap';
import LAT from '../../../assets/images/icon/logo/LAT.png'
import LAI from '../../../assets/images/icon/logo/LAI.png'
import Exclamation from '../../../assets/images/icon/sign/Exclamation.png'
import Caution from '../../../assets/images/icon/sign/Caution.png'

const Deposits = () =>{
    return <div>
        <StyledCard>
            <Row>
                <StyledCol>
                    <p>Collateral</p>
                    <Form.Control type="text" placeholder="amount" />
                    <p>Balance: 200.05434533</p>
                </StyledCol>
                <Col>
                    <StyledDropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <img alt="LAT" src={LAT} /> LAT
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">LAT</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">ETH</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">DOT</Dropdown.Item>
                        </Dropdown.Menu></StyledDropdown>
                </Col>
            </Row>
        </StyledCard>
        <StyledCard>
            <Row>
                <StyledCol>
                    <p>Collateral</p>
                    <Form.Control type="text" placeholder="amount" />
                    <p>Balance: 200.05434533</p>
                </StyledCol>
                <StyleCol2>
                    <StyledDiv><img alt="LAT" src={LAI} /> <span>LAI</span></StyledDiv>
                </StyleCol2>
            </Row>
        </StyledCard>
        <StyledCard2>
            <StyledRow>
                <CardBody style={{textAlign: "left"}}>
                    <p>Liquidation Reserve <img alt="exclamation" src={Exclamation}/></p>
                    <p>Borrowing Fee</p>
                    <p>Total debt</p>
                    <p>Collateral ratio</p>
                    <p>Liquidation price (Normal mode)</p>
                </CardBody>
                <CardBody style={{textAlign: "right"}}>
                    <p>200LAI</p>
                    <p>0.00LAI(0.50%)</p>
                    <p>260.00LAI</p>
                    <p>115.8%</p>
                    <p>$1,239.33</p>
                </CardBody>
            </StyledRow>
        </StyledCard2>
        <StyledCard3>
            <img alt="exclamation" src={Caution}/><p>Total debt must be at least 2000 LAI.</p>
        </StyledCard3>
        <StyledCard3>
            <img alt="exclamation" src={Caution} style={{height: "24px"}} /><p>Keeping your CR above 150% can help avoid liquidation under Recovery Mode.</p>
        </StyledCard3>
        <div>
            <StyleButton>Confirm</StyleButton>
        </div>
    </div>;
};

const StyledCard = styled(Container)`
width: 100%;
height: 140px;
margin: 20px 0;
padding: 20px 32px;
border: 1px solid white;
border-radius: 10px;
backgroundColor: transparent;
`

const StyledCol = styled(Col)`
p:nth-of-type(1) {
height: 24px;
left: 12px;

color: #ffffff;
font-family: Archivo;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
font-feature-settings: 'pnum' on, 'lnum' on;
}

p:nth-of-type(2) {
height: 24px;
left: 0px;

font-family: Livvic;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
font-feature-settings: 'pnum' on, 'lnum' on;
}
`

const StyledDropdown = styled(Dropdown)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  float:right;
`

const StyleCol2 = styled(Col)`
 display: flex;
 height: 55px;
`

const StyledDiv = styled.div`
  position: relative;
  top: 90%;
  transform: translateY(-50%);
  padding: 0.7rem 1.6rem 0.9rem;
  border: 1px solid #ffffff;
  border-radius: 10px;
  margin-left: auto;
  span {
  color: #ffffff;
  font-family: Archivo;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  vertical-align: middle;
  }
`
const StyleButton = styled(Button)`
width: 100%;
height: 70px;
margin-top: 5px;
background: linear-gradient(to right, rgba(138, 212, 236, 1) 20%, rgba(255, 86, 169, 1) 30%, rgba(246, 124, 220, 1) 45%, rgba(239, 150, 255, 1) 60%,rgba(255, 170, 108, 1)) 70%;
border: 0;
font-family: Archivo;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 24px;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #000000;
`

const StyledCard2 = styled(Container)`
width: 100%;
margin: 5px 0;
padding: 5px 0 0;
backgroundColor: transparent;
`
const StyledRow = styled(Row)`
margin-top: 5px;
`

const CardBody = styled(Col)`
width: 250px;
margin-bottom: 0;
p{
color: #ffffff;
font-family: Livvic;
font-style: Medium;
font-size: 21px;
align: Left;
margin-bottom: 15px;
}
p :nth-of-type(1) {
vertical-align: top
}
p :nth-of-type(2) {
vertical-align: bottom
}
`
const StyledCard3 = styled(Container)`
width: 100%;
margin: 8px 0;
padding: 10px 0;
border: 1px solid white;
border-radius: 10px;
backgroundColor: transparent;
display: flex;
justify-content: center;
p {
width: 425px;
font-family: Archivo;
font-style: SemiBold;
font-size: 20px;
line-height: 24px;
align: Left;
vertical align: Top;
number-case: Lining;
number-spacing: Proportional;
}
`

export default Deposits;