import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ItemList } from '../../App';
import ConsItem from './ConsItem';

const Cons: React.FC<{ consList: ItemList[] }> = ({ consList }) => {
    const [cons, setCons] = useState<ItemList[]>([]);

    useEffect(() => {
        setCons(consList.filter((con) => con.isPro === false));
    }, [consList]);

    return (
        <ConsCard>
            <h3>Cons List</h3>
            {cons.map((con, index) => (
                <ConsItem key={index} con={con.item} />
            ))}
        </ConsCard>
    );
};

const ConsCard = styled.div`
    width: 40%;
    margin-top: 16px;
    min-height: 300px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
`;

export default Cons;
