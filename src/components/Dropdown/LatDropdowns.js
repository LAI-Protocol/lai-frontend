import styled from "styled-components";
import { Dropdown } from 'react-bootstrap';
import LAT from "../../assets/images/icon/logo/LAT.png";
import { RiArrowDropDownLine } from 'react-icons/ri';

const StyledDropdown = styled(Dropdown)`
    margin: auto 0;
    > span{
    margin-right: 32px;
    font-family: Livvic;
    font-size: 14px;
    line-height: 137%;
    }
    > .btn-primary {
    padding: 16px 10px;
    border-color: #ffffff;
    border-radius: 15px; 
    background-color: #000000;
    }
    > button > span {
    margin-left: 4px;
    margin-right: 23px;
    font-family: Archivo;
    font-size: 14px;
    line-height: 158%;
    }
    .dropdown-toggle::after {
    display: none;
`

const LatDropdowns = () => {
    return <StyledDropdown>
        <span>Max</span>
        <Dropdown.Toggle id="dropdownMenuButton">
            <img alt="LAT" src={LAT}/>
            <span>LAT</span>
            <RiArrowDropDownLine size={30} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">LAT</Dropdown.Item>
            <Dropdown.Item href="#/action-2">ETH</Dropdown.Item>
            <Dropdown.Item href="#/action-3">DOT</Dropdown.Item>
        </Dropdown.Menu></StyledDropdown>
}

export default LatDropdowns;