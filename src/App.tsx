import React, { useState } from 'react';
import Pros from './components/Pros/Pros';
import Cons from './components/Cons/Cons';
import Button from './components/shared/Button';
import { StyledApp, StyledContainer, Input, ListContainer, Text, BtnInput } from './App.styles';

export type ItemList = {
    id: number;
    item: string;
    isPro: boolean;
};

const App: React.FC = () => {
    const [text, setText] = useState('');
    const [list, setList] = useState<ItemList[]>([]);

    const handleBtns = (item: string) => {
        if (text) {
            const num = Math.max(0, ...list.map((i) => i.id));
            if (item === 'pro') setList([...list, { item: text, isPro: true, id: num + 1 }]);
            if (item === 'con') setList([...list, { item: text, isPro: false, id: num + 1 }]);
        }
        setText('');
    };

    const removeListItem = (id: number) => {
        setList([...list.filter((i) => i.id !== id)]);
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
                    <Pros prosList={list} removeListItem={removeListItem} />
                    <Cons consList={list} removeListItem={removeListItem} />
                </ListContainer>
            </StyledContainer>
        </StyledApp>
    );
};

export default App;
