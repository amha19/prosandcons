import React, { useState } from 'react';
import Pros from './components/Pros/Pros';
import Cons from './components/Cons/Cons';
import {
    StyledApp,
    StyledContainer,
    Button,
    Input,
    ListContainer,
    Text,
    BtnInput,
} from './App.styles';

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
        <StyledApp>
            <StyledContainer>
                <Text size={2.5}>Don't be in a haste</Text>
                <BtnInput>
                    <Button
                        onClick={() => {
                            handleBtns('pro');
                        }}
                    >
                        Left
                    </Button>
                    <Input
                        type="text"
                        onChange={(event) => setText(event.target.value)}
                        value={text}
                    />
                    <Button
                        onClick={() => {
                            handleBtns('con');
                        }}
                    >
                        Right
                    </Button>
                </BtnInput>
                <ListContainer>
                    <Pros prosList={list} />
                    <Cons consList={list} />
                </ListContainer>
            </StyledContainer>
        </StyledApp>
    );
};

export default App;
