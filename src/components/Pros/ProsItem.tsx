import React from 'react';
import styled from 'styled-components';
import Box from '../shared/Box';
import { Text } from '../../App.styles';
import { RemoveBtn } from '../shared/Button';

type Props = {
    pro: string;
    proId: number;
    removeListItem: (id: number) => void;
};

const ProsItem: React.FC<Props> = ({ pro, proId, removeListItem }) => {
    return (
        <StyledBox>
            <StyledText size={1}>
                <span style={{ color: 'lightgreen', paddingRight: 8 }}>&#10003;</span>
                {pro}
            </StyledText>
            <RemoveBtn onClick={() => removeListItem(proId)}>&#10006;</RemoveBtn>
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
