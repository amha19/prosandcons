import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ItemList } from '../../App';
import { Text } from '../../App.styles';
import ConsItem from './ConsItem';

const Cons: React.FC<{ consList: ItemList[]; removeListItem: (id: number) => void }> = ({
    consList,
    removeListItem,
}) => {
    const [cons, setCons] = useState<ItemList[]>([]);

    useEffect(() => {
        setCons(consList.filter((con) => con.isPro === false));
    }, [consList]);

    return (
        <ConsCard>
            <StyledText size={1.5}>Cons List</StyledText>
            {cons.map((con, index) => (
                <ConsItem
                    key={index}
                    con={con.item}
                    conId={con.id}
                    removeListItem={removeListItem}
                />
            ))}
        </ConsCard>
    );
};

const StyledText = styled(Text)`
    margin: 16px 0 24px 0;
`;

const ConsCard = styled.div`
    width: 40%;
    background-color: #fff;
    margin-top: 16px;
    min-height: 300px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: inset 1px 0px 8px rgba(0, 0, 0, 0.1);
`;

export default Cons;
