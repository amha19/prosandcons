import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ItemList } from '../App';

const Pros = (props: { prosList: ItemList[] }) => {
    const { prosList } = props;

    const [pros, setPros] = useState<ItemList[]>([]);

    useEffect(() => {
        setPros(prosList.filter((pro) => pro.isPro));
    }, [prosList]);

    return (
        <ProsCard>
            <h3>Pros List</h3>
            <ul>
                {pros.map((pro, index) => (
                    <li key={index}>{pro.item}</li>
                ))}
            </ul>
        </ProsCard>
    );
};

const ProsCard = styled.div`
    width: 40%;
    margin-top: 16px;
    height: auto;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
` 

export default Pros;
