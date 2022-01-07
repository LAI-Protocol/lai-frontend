import styled from "styled-components";

const StyledCard = styled.div`
    width: 554px;
    margin-left: auto;
    margin-right: 0;
    padding: 0 24px 27px;
    border: 1px solid white;
    border-radius: 15px;  
`

const StatisticsCard = ({children}) => {
    return <StyledCard>{children}</StyledCard>;
}

export default StatisticsCard;