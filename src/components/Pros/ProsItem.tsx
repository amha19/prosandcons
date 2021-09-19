import React from 'react';
import styled from 'styled-components';
import Box from '../shared/Box';
import { Text } from '../../App.styles';
import { RemoveBtn } from '../shared/Button';

const ProsItem: React.FC<{ pro: string; proId: number; removeListItem: (id: number) => void }> = ({
    pro,
    proId,
    removeListItem,
}) => {
    return (
        <StyledBox>
            <StyledText size={1}>{pro}</StyledText>
            <RemoveBtn onClick={() => removeListItem(proId)}>X</RemoveBtn>
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

export default ProsItem;
