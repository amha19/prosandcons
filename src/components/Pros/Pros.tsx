import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ItemList } from '../../App';
import { Text } from '../../App.styles';
import ProsItem from './ProsItem';

const Pros: React.FC<{ prosList: ItemList[]; removeListItem: (id: number) => void }> = ({
    prosList,
    removeListItem,
}) => {
    const [pros, setPros] = useState<ItemList[]>([]);

    useEffect(() => {
        setPros(prosList.filter((pro) => pro.isPro));
    }, [prosList]);

    return (
        <ProsCard>
            <StyledText size={1.5}>Pros List</StyledText>
            {pros.map((pro, index) => (
                <ProsItem
                    key={index}
                    pro={pro.item}
                    proId={pro.id}
                    removeListItem={removeListItem}
                />
            ))}
        </ProsCard>
    );
};

const StyledText = styled(Text)`
    margin: 16px 0 24px 0;
`;

const ProsCard = styled.div`
    width: 40%;
    background-color: #fff;
    margin-top: 16px;
    min-height: 300px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: inset 1px 0px 8px rgba(0, 0, 0, 0.1);
`;

export default Pros;
