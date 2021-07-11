import styled from 'styled-components';

const FooterStyles = styled.div`
    background-color: #666;
    color: white;
    height: 60px;
    display: flex;
    align-items: center;

    padding-left: 30px;

    br {
        display: none;
    }

    @media (max-width: 375px) {
        height: 80px;
        br {
            display: initial;
        }
    }
`;

export default FooterStyles;