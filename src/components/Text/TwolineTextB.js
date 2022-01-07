import styled from "styled-components";


const StyledText = styled.p`
    font-family: Livvic;
    font-weight: 600;
    font-size: ${props => props.fontSize? props.fontSize : "34px"};
    line-height: 178%;
    color: #ffffff;
    text-align: left;
`

const StyledDiv = styled.div`
    display: inline-block;
`

const TwoLineTextB = (props) => {
    return <>
        <StyledDiv textAlign={props.textAlign}>
            <StyledText fontSize={props.fontSize}>{props.name}</StyledText>
            <StyledText>{props.value}</StyledText>
        </StyledDiv>
    </>
}

export default TwoLineTextB;