import styled from "styled-components";
import LAI from '../../assets/images/icon/logo/LAI.png'
import LAO from '../../assets/images/icon/logo/LAO.png'
const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 136px;
    height: 66px;
    border: 1px solid white;
    border-radius: 15px;  
    font-family: Archivo;
    font-size: 14px;
    line-height: 158%;
`

const StyledImg = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 8px;
`

const searchCoinImg = (symbolName) => {

    switch (symbolName) {
        case 'LAI':
            return LAI
        case 'LAO':
            return LAO
    }

}

const TokenCard = (props) => {

    let symbolImg = searchCoinImg(props.symbol);


    return <StyledCard><StyledImg alt="symbolImg" src={symbolImg} />{props.name}</StyledCard>;
}

export default TokenCard;