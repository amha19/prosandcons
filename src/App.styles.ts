import styled from 'styled-components';

export const StyledApp = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const StyledContainer = styled.div`
    width: 75%;
    border: 1px solid saddlebrown;
`;

export const Text = styled.p`
    font-size: ${(props: { size: number }) => (props.size ? props.size + 'rem' : '1rem')};
    margin: 40px 0 56px 0;
`;

export const BtnInput = styled.p`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    font-size: 1rem;
    padding: 8px 16px;
    margin: 0 16px;
    background: transparent;
    border: 2px solid #3f69cd;
    border-radius: 4px;
    color: #3f69cd;
    box-sizing: border-box;
`;

export const Input = styled.input`
    width: 40%;
    color: #525865;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #d1d1d1;
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.07);
    font-family: inherit;
    font-size: 1em;
    line-height: 1.45;
    outline: none;
    padding: 0.6em 1.45em 0.7em;
    -webkit-transition: 0.18s ease-out;
    -moz-transition: 0.18s ease-out;
    -o-transition: 0.18s ease-out;
    transition: 0.18s ease-out;
    &:hover {
        box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
    }
    &:focus {
        color: #4b515d;
        border: 1px solid #b8b6b6;
        box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
`;

export const ListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;
