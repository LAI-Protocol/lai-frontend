import styled from "styled-components";

const StyledButton = styled.button`
    width: 45%;
    height: 70px;
    margin-bottom: 10px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    background: transparent;
    color: #ffffff;
    font-family: Archivo;
    font-weight: 600;
    font-size: 16px;
    line-height: 123%;
    `

const WithdrawButton = ({ disabled, children}) => {
    return <StyledButton disabled={disabled}>{children}</StyledButton>;
}

export default WithdrawButton;