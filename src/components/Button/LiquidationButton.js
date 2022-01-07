import styled from "styled-components";

const StyledButton = styled.button`
    width: ${props => props.width};
    height: 47px;
    background: linear-gradient(to right, rgba(138, 212, 236, 1) 20%, rgba(255, 86, 169, 1) 30%, rgba(246, 124, 220, 1) 45%, rgba(239, 150, 255, 1) 60%,rgba(255, 170, 108, 1)) 70%;
    border: 0;
    border-radius: 10px;
    color: #000000;
    font-family: Archivo;
    font-weight: 600;
    font-size: 18px;
    line-height: 123%;
    `

const LiquidationButton = ({disabled, children, width}) => {
    return <StyledButton width={width} disabled={disabled}>{children}</StyledButton>;
}

export default LiquidationButton;