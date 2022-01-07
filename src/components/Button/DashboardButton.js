import styled from "styled-components";
import InputGreen from '../../assets/images/icon/button/input-green.png'
import OutputGreen from '../../assets/images/icon/button/output-green.png'
import InputRed from '../../assets/images/icon/button/input-red.png'
import OutputRed from '../../assets/images/icon/button/output-red.png'
import Speaker from '../../assets/images/icon/button/speaker.png'

const StyledButton = styled.button`
    display: flex;
    width: 60px;
    height: 30px;
    padding: 0;
    margin: 15px 30px;
    border: 0;
    background-color: transparent;
    color: ${props => props.color};
    font-family: Archivo;
    font-weight: 600;
    font-size: 18px;
    line-height: 133%;
`
const StyledImg = styled.img`
    margin-right: 10px;
`

const searchImg = (signName) => {

    switch (signName) {
        case 'InputGreen':
            return InputGreen
        case 'OutputGreen':
            return OutputGreen
        case 'InputRed':
            return InputRed
        case 'OutputRed':
            return OutputRed
        case `Speaker`:
            return Speaker
    }
}

const StakeButton = ({disabled, children, sign, color}) => {

    let signImg = searchImg(sign);

    return <StyledButton disabled={disabled} color={color}><StyledImg alt="signImg" src={signImg} />{children}</StyledButton>;
}

export default StakeButton;