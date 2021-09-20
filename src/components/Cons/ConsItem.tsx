import React from 'react';
import styled from 'styled-components';
import Box from '../shared/Box';
import { Text } from '../../App.styles';
import { RemoveBtn } from '../shared/Button';

type Props = {
    con: string;
    conId: number;
    removeListItem: (id: number) => void;
};

const ConsItem: React.FC<Props> = ({ con, conId, removeListItem }) => {
    return (
        <StyledBox>
            <StyledText size={1}>
                <span style={{ color: 'red', paddingRight: 8 }}>&#10007;</span>
                {con}
            </StyledText>
            <RemoveBtn onClick={() => removeListItem(conId)}>&#10006;</RemoveBtn>
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
