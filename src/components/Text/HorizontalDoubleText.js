import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    > div > p:nth-child(1) {
    color: ${props => props.color ? props.color : "#ffffff"};
    }
    > div> p:nth-child(2) {
    color: ${props => props.colorB ? props.colorB : "#ffffff"};
    }
`

const StyledText = styled.p`
    margin-top: ${props => props.mt ? props.mt : "27px"};
    font-family: Archivo;
    font-weight: 600;
    font-size: ${props => props.fontSize ? props.fontSize : "20px"};
    line-height: 96%;
    font-feature-settings: 'pnum' on, 'lnum' on;
`

const HorizontalDoubleText = ({mt, color, colorB, fontSize, name, value1, value2}) => {
    return <>
        <StyledDiv>
            <StyledText fontSize={fontSize}>{name}</StyledText>
            <div>
                <StyledText color={color}>{value1}</StyledText>
                <StyledText colorB={colorB} mt={mt}>{value2}</StyledText>
            </div>
        </StyledDiv>
    </>
}

export default HorizontalDoubleText;