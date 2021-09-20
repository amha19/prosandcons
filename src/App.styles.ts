import styled from 'styled-components';

export const NavBar = styled.nav`
    width: 100vw;
    height: 80px;
    background-color: #000099;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    z-index: 100;
`;

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
    background: linear-gradient(to bottom, #e5f3fe, #c5e3fe);
    min-height: calc(100vh - 80px);
`;

export const Text = styled.p`
    font-size: ${(props: { size?: number }) => (props.size ? props.size + 'rem' : '1rem')};
    color: rgba(0, 0, 0, 0.75);
    margin: 56px 0;
`;

export const BtnInput = styled.p`
    display: flex;
    justify-content: center;
`;

export const Input = styled.input`
    width: 40%;
    color: #525865;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #d1d1d1;
    box-shadow: inset 1px 2px 8px rgba(0, 0, 153, 0.07);
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
        box-shadow: inset 1px 2px 8px rgba(0, 0, 153, 0.02);
    }
    &:focus {
        color: #4b515d;
        border: 1px solid #b8b6b6;
        box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 153, 0.2);
    }
`;

export const ListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;
