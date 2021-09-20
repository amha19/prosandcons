import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ItemList } from '../../App';
import { Text } from '../../App.styles';
import ConsItem from './ConsItem';
import ListCard from '../shared/ListCard';

const Cons: React.FC<{ consList: ItemList[]; removeListItem: (id: number) => void }> = ({
    consList,
    removeListItem,
}) => {
    const [cons, setCons] = useState<ItemList[]>([]);

    useEffect(() => {
        setCons(consList.filter((con) => con.isPro === false));
    }, [consList]);

    return (
        <ListCard>
            <StyledText size={1.5}>Cons List</StyledText>
            {cons.map((con, index) => (
                <ConsItem
                    key={index}
                    con={con.item}
                    conId={con.id}
                    removeListItem={removeListItem}
                />
            ))}
        </ListCard>
    );
};

const StyledText = styled(Text)`
    margin: 16px 0 24px 0;
`;

export default Cons;
