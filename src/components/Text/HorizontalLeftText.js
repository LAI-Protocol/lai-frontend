import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    margin-top: 27px;
`

const StyledText = styled.p`
    margin-right: 23px;
    color: ${props => props.color? props.color : "#ffffff"};
    font-size: 20px;
    font-family: Archivo;
    font-weight: 500;
    line-height: 120%;
    text-align: left;
    font-variant-numeric: lining-nums;
`

// const HorizontalLeftText = (props) => {
//     console.log(props);
//
//     return <>
//         <StyledDiv>
//             <StyledText>{props.name}</StyledText>
//             <StyledText color={props.color}>{props.value}</StyledText>
//         </StyledDiv>
//     </>
// }

const HorizontalLeftText = ({name,color,value}) => {

    return <>
        <StyledDiv>
            <StyledText>{name}</StyledText>
            <StyledText color={color}>{value}</StyledText>
        </StyledDiv>
    </>
}

export default HorizontalLeftText;