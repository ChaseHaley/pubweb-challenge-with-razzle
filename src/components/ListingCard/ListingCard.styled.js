import styled from 'styled-components';

const ListingCardStyles = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-rows: 2fr 1fr;
    overflow: auto;
    height: 100%;
`;

export const ListingImage = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`;

export const ListingInfo = styled.div`
    margin-left: 15px;
    margin-top: 15px;
`;

export const ListingName = styled.div`
    font-size: 2.25vw;

    @media (max-width: 500px) {
        font-size: 6vw;
    }
`;

export const ListingPrice = styled.div`
    color: grey;
    margin: 3% 0px;
    font-size: 1vw;

    @media (max-width: 500px) {
        font-size: 3vw;
    }
`;

export const ListingBody = styled.div`
    font-size: 1.25vw;

    @media (max-width: 500px) {
        font-size: 4vw;
    }
`;

export default ListingCardStyles;