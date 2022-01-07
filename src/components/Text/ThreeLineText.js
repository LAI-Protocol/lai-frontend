import styled from "styled-components";

const StyledDiv = styled.div`
    text-align: left;
    margin: auto 0;
`

const StyledText1 = styled.p`
    font-family: Archivo;
    font-size: 14px;
    line-height: 158%;
    vertical-align: top;
`
const StyledText2 = styled.p`
    font-family: Livvic;
    font-weight: 400;
    font-size: 14px;
    line-height: 137%;
    vertical-align: top;
`

const StyledInput = styled.input`
    display: block;
    border: 0;
    background-color: #000000;
    color: #ffffff;
    font-family: Livvic;
    font-weight: 400;
    font-size: 25px;
    line-height: 134%;
    vertical-align: top
`

const ThreeLineText = (props) => {
    return <>
        <StyledDiv>
            <StyledText1>{props.type}</StyledText1>
            <StyledInput type="text" placeholder="amount"/>
            <StyledText2 color={props.color}>{props.name} {props.number}</StyledText2>
        </StyledDiv>
    </>
}

export default ThreeLineText;