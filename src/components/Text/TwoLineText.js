import styled from "styled-components";

const StyledText = styled.p`
    font-family: Livvic;
    font-style: Medium;
    font-size: 25px;
    line-height: 178%;
    vertical-align: top;
    color: ${props => props.color};
`

const StyledDiv = styled.div`
    display: inline-block;
    p{
    text-align: ${props => props.textAlign};
    }
`

const TwoLineText = (props) => {
    return <>
        <StyledDiv textAlign={props.textAlign}>
            <StyledText>{props.name}</StyledText>
            <StyledText color={props.color}>{props.value}</StyledText>
        </StyledDiv>
    </>
}

export default TwoLineText;