import styled from "styled-components";

const StyledCard = styled.div`
    width: 100%;
    height: ${props => props.height};
    padding: 0 24px;
    margin: 15px 0;
    border: 1px solid white;
    border-radius: 15px;  
`

const DashboardCard = ({children, height}) => {
    return <StyledCard height={height}>{children}</StyledCard>;
}

export default DashboardCard;