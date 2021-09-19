import React from 'react';
import styled from 'styled-components';
import Box from '../shared/Box';
import { Text } from '../../App.styles';
import { RemoveBtn } from '../shared/Button';

const ConsItem: React.FC<{ con: string; conId: number; removeListItem: (id: number) => void }> = ({
    con,
    conId,
    removeListItem,
}) => {
    return (
        <StyledBox>
            <StyledText size={1}>{con}</StyledText>
            <RemoveBtn onClick={() => removeListItem(conId)}>X</RemoveBtn>
        </StyledBox>
    );
};

const StyledBox = styled(Box)`
    padding-left: 32px;
`;

const StyledText = styled(Text)`
    margin: 0 16px 12px 0;
    text-align: left;
`;

export default ConsItem;
