import React, { useState } from 'react';
import styled from 'styled-components';
import Pros from './components/Pros';
import Cons from './components/Cons';
import './App.css';

export type ItemList = {
    item: string;
    isPro: boolean;
};

const App: React.FC = () => {
    const [text, setText] = useState('');
    const [list, setList] = useState<ItemList[]>([]);

    const handleBtns = (item: string) => {
        if (text) {
            if (item === 'pro') setList([...list, { item: text, isPro: true }]);
            if (item === 'con') setList([...list, { item: text, isPro: false }]);
        }
        setText('');
    };

    return (
        <div className="App">
            <div className="container">
            <h1>Don't be in a haste</h1>
            <div className="btn-input">
                <Button
                    onClick={() => {
                        handleBtns('pro');
                    }}
                >
                    Left
                </Button>
                <Input type="text" onChange={(event) => setText(event.target.value)} value={text} />
                <Button
                    onClick={() => {
                        handleBtns('con');
                    }}
                >
                    Right
                </Button>
            </div>
            <ListContainer>
                <Pros prosList={list} />
                <Cons consList={list} />
            </ListContainer>
            </div>
        </div>
    );
}

const Button = styled.button`
    font-size: 1rem;
    padding: 8px 16px;
    margin: 0 16px;
    background: transparent;
    border: 2px solid #3F69CD;
    border-radius: 4px;
    color: #3F69CD;
    box-sizing: border-box;
`;

const Input = styled.input`
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
    -webkit-transition: .18s ease-out;
    -moz-transition: .18s ease-out;
    -o-transition: .18s ease-out;
    transition: .18s ease-out;
    &:hover {
        box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
    }
    &:focus {
        color: #4b515d;
        border: 1px solid #B8B6B6;
        box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
`;

const ListContainer = styled.div`
    width: 100%;    
    display: flex;
    justify-content: space-evenly;
`;

export default App;
