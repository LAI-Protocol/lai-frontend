import styled from "styled-components";
import LAILg from "../../assets/images/icon/logo/LAI-lg.png"
import LAOLg from "../../assets/images/icon/logo/LAO-lg.png"

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const StyledP = styled.p`
    height: 57px;
    color: #ffffff;
    font-family: Livvic;
    font-size: 28px;
    font-weight: 500;
    line-height: 200%;
    > img {
    margin-right: 10px;
    }
`

const StyledText = styled.span`
    margin-left: 20px;
    color: ${props => props.color ? props.color : "#ffffff"};
    font-family: Archivo;
    font-size: 20px;
    font-weight: 500;
    font-feature-settings: 'pnum' on, 'lnum' on;
    line-height: 120%;
`

const searchImg = (symbolName) => {

    switch (symbolName) {
        case 'LAI':
            return LAILg
        case 'LAO' :
            return LAOLg
    }
}

const DashboardTitle = (props) => {

    let symbolImg = searchImg(props.symbol)

    return <>
        <StyledDiv>
            <StyledP><img alt="symbolImg" src={symbolImg}/>{props.text}</StyledP>
            <div>
                <StyledText>{props.name}</StyledText>
                <StyledText color={props.color}>{props.value}</StyledText>
            </div>
        </StyledDiv>
    </>
}

export default DashboardTitle;