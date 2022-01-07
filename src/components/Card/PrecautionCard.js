import styled from 'styled-components';
import Caution from "../../assets/images/icon/sign/Caution.png";
import CautionRed from "../../assets/images/icon/sign/Caution-red.png";

const StyledCard = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    padding: 10px 95px;  
    margin: 15px 0;
    border: 1px solid rgba(158, 158, 158, 1);
    border-radius: 10px;  
    color: ${props => props.color? props.color : "rgba(158, 158, 158, 1)"};
    text-align: left;
    font-family: Archivo;
    font-size: 20px;
    line-height: 110%;
    > img {
    margin-right: 10px;
    }
`

const searchImg= (signName) => {

    switch (signName) {
        case 'CautionRed':
            return CautionRed
        default :
            return Caution
    }
}

const PrecautionCard = (props) => {

    let signImg = searchImg(props.sign);

    return <StyledCard color={props.color}><img alt="Caution" src={signImg}/>{props.text}</StyledCard>;
}

export default PrecautionCard;