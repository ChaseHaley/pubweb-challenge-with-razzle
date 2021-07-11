import styled from 'styled-components';

const ListingContainerStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 30px;
    margin-top: 0px;
    justify-content: center;
    align-items: start;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 1024px) and (min-width: 501px) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
    }
`;

export default ListingContainerStyles;