import styled from 'styled-components';

const Button = styled.button`
    font-size: 1rem;
    padding: 8px 16px;
    margin: 0 16px;
    background-color: #4d4dff;
    border-radius: 4px;
    border-color: transparent;
    color: #fff;
    box-sizing: border-box;
    min-width: 80px;
    &:hover {
        background-color: #0000cc;
        transition: 300ms ease-out;
    }
`;

export const RemoveBtn = styled.button`
    font-family: Arial;
    border: transparent;
    background: transparent;
    margin-right: 32px;
    color: #ddd;
    &:hover {
        color: #aaa;
        transition: 300ms;
    }
`;

export default Button;
