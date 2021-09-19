import styled from 'styled-components';

const Button = styled.button`
    font-size: 1rem;
    padding: 8px 16px;
    margin: 0 16px;
    background: transparent;
    border: 2px solid #3f69cd;
    border-radius: 4px;
    color: #3f69cd;
    box-sizing: border-box;
`;

export const RemoveBtn = styled.button`
    font-family: Arial;
    border: transparent;
    background: transparent;
    margin-right: 32px;
    &:hover {
        font-size: 103%;
    }
`;

export default Button;
