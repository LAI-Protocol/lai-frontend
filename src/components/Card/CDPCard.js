import styled from "styled-components";

const StyledCard = styled.div`
    display: ${props => props.display};
    justify-content:space-between;
    align-items: center;
    width: 100%;
    padding: ${props => props.padding};
    border: 1px solid white;
    border-radius: 15px;
    backgroundColor: transparent;
`

const CDPCard = ({children, display, padding})=> {
    return <StyledCard display={display} padding={padding}>{children}</StyledCard>;
}

export default CDPCard;