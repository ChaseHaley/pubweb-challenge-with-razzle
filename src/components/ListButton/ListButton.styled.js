import styled from 'styled-components';

const Button = styled.button`
    background-color: #0d66ba;
    color: white;
    font-size: 1em;
    padding: 0.75em 4em;
    border: 0;
    border-radius: 5px;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: #0e70cc;
    }

    @media (max-width: 500px) {
        width: 100%;
        margin: 0 30px;
        height: 60px;
        font-size: 5vw;
    }
`;

export const ListButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

export default Button;