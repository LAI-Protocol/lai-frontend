import styled from "styled-components";

const StyledButton = styled.button`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 0;
    background: ${props => props.bgColor};
    border-radius: 10px;
    color: ${props => props.color};
    font-family: Livvic;
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.fontSize};
    line-height: 24px;
    font-feature-settings: 'pnum' on, 'lnum' on;
`

const HeaderButton = ({ width, height, bgColor, color, fontSize, disabled, children }) => {
    return <StyledButton disabled={disabled} width={width} height={height} bgColor={bgColor} color={color} fontSize={fontSize}>{children}</StyledButton>;
}

export default HeaderButton;