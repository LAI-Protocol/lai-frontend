import styled from "styled-components";
import Exclamation from "../../assets/images/icon/sign/Exclamation.png";

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: ${props => props.mt? props.mt : "27px"};
    font-size: ${props => props.fontSize? props.fontSize : "20px"};
`

const StyledText = styled.p`
    color: ${props => props.color? props.color : "#ffffff"};
    font-family: Archivo;
    font-weight: ${props => props.fontWeight? props.fontWeight : "600"};
    line-height: 110%;
    text-align: ${props => props.textAlign};
    font-variant-numeric: lining-nums;
`

const StyledImg = styled.img`
    width: 22px;
    height: 22px;
    margin-left: 8px;
`

const searchImg= (symbolName) => {

    switch (symbolName) {
        case 'Exclamation':
            return Exclamation
        default :
            return
    }
}

const HorizontalText = (props) => {

    let symbolImg = searchImg(props.symbol);

    return <>
        <StyledDiv mt={props.mt} fontSize={props.fontSize}>
            <StyledText fontWeight={props.fontWeight}>{props.name}{ props.symbol && <StyledImg src={symbolImg} />}</StyledText>
            <StyledText color={props.color} fontWeight={props.fontWeight}>{props.value}</StyledText>
        </StyledDiv>
    </>
}

export default HorizontalText;