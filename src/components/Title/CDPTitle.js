import styled from "styled-components";

const StyledP = styled.p`
    height: 57px;
    margin-left: ${props => props.ml ? props.ml : "0"};
    color: #ffffff;
    font-family: Livvic;
    font-size: 28px;
    font-weight: 600;
    line-height: 159%;
    text-align: Left;
    vertical-align: Top;
`

const CDPTitle = (props) => {
    return <StyledP ml={props.ml}>{props.text}</StyledP>
}

export default CDPTitle;