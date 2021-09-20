import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ItemList } from '../../App';
import { Text } from '../../App.styles';
import ProsItem from './ProsItem';
import ListCard from '../shared/ListCard';

const Pros: React.FC<{ prosList: ItemList[]; removeListItem: (id: number) => void }> = ({
    prosList,
    removeListItem,
}) => {
    const [pros, setPros] = useState<ItemList[]>([]);

    useEffect(() => {
        setPros(prosList.filter((pro) => pro.isPro));
    }, [prosList]);

    return (
        <ListCard>
            <StyledText size={1.5}>Pros List</StyledText>
            {pros.map((pro, index) => (
                <ProsItem
                    key={index}
                    pro={pro.item}
                    proId={pro.id}
                    removeListItem={removeListItem}
                />
            ))}
        </ListCard>
    );
};

const StyledText = styled(Text)`
    margin: 16px 0 24px 0;
`;

export default Pros;
