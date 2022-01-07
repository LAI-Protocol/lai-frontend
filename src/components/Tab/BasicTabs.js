import styled from 'styled-components';
import {Tabs, Tab,} from 'react-bootstrap';

const StyledTabs = styled(Tabs)`
    border: 1px solid #ffffff;
    border-radius: 15px;
    font-family: Archivo;
    font-size: 20px;
    line-height: 110%;
    .nav-link {
    color: #ffffff;
    }   
    li:nth-child(1) > .nav-link {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    }
    li:nth-child(1) > .nav-link:hover {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: #ffffff;
    color: #000000;
    }
    li:nth-child(2) > .nav-link:hover{
    background-color: #ffffff;
    color: #000000;
    }
    li:nth-child(3) > .nav-link {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    }
    li:nth-child(3) > .nav-link:hover {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #ffffff;
    color: #000000;
    }
`


const BasicTabs = ({children1, children2, children3}) => {
    return <>
        <StyledTabs fill justify defaultActiveKey="deposit">
            <Tab eventKey="deposit" title="Deposit">
                {children1}
            </Tab>
            <Tab eventKey="withdraw" title="Withdraw">
                {children2}
            </Tab>
            <Tab eventKey="redemption" title="Redemption">
                {children3}
            </Tab>
        </StyledTabs>
    </>
}

export default BasicTabs;