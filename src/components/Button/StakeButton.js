import styled from "styled-components";
import Plus from '../../assets/images/icon/sign/Plus.png'
import Minus from '../../assets/images/icon/sign/Minus.png'

const StyledButton = styled.button`
    width: 136px;
    height: 64px;
    border: 1px solid #ffffff;
    border-radius: 15px;
    background: transparent;
    color: #ffffff;
    font-family: Archivo;
    font-weight: 600;
    font-size: 14px;
    line-height: 171%;
`
const StyledImg = styled.img`
    margin-right: 20px;
`

const searchImg = (signName) => {

    switch (signName) {
        case 'Plus':
            return Plus
        case 'Minus':
            return Minus
    }
}

const StakeButton = ({disabled, children, sign, modalName, stakeModal, unstakeModal}) => {

    let signImg = searchImg(sign);

    const switchModal = (modalName) => {
        switch (modalName) {
            case 'stakeModal':
                return stakeModal()
            case 'unstakeModal':
                return unstakeModal()
        }
    }

    return <StyledButton disabled={disabled} onClick={() => switchModal(modalName)}><StyledImg alt="signImg" src={signImg} />{children}</StyledButton>;
}

export default StakeButton;