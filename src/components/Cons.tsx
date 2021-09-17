import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ItemList } from '../App';

const Cons = (props: { consList: ItemList[] }) => {
    const { consList } = props;

    const [cons, setCons] = useState<ItemList[]>([]);

    useEffect(() => {
        setCons(consList.filter((con) => con.isPro === false));
    }, [consList]);

    return (
        <ConsCard>
            <h3>Cons List</h3>
            <ul>
                {cons.map((con, index) => (
                    <li key={index}>{con.item}</li>
                ))}
            </ul>
        </ConsCard>
    );
};

const ConsCard = styled.div`
    width: 40%;
    margin-top: 16px;
    height: auto;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
`

export default Cons;
