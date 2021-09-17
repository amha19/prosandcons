import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ItemList } from '../../App';
import ProsItem from './ProsItem';

const Pros: React.FC<{ prosList: ItemList[] }> = ({ prosList }) => {
    const [pros, setPros] = useState<ItemList[]>([]);

    useEffect(() => {
        setPros(prosList.filter((pro) => pro.isPro));
    }, [prosList]);

    return (
        <ProsCard>
            <h3>Pros List</h3>
            {pros.map((pro, index) => (
                <ProsItem key={index} pro={pro.item} />
            ))}
        </ProsCard>
    );
};

const ProsCard = styled.div`
    width: 40%;
    margin-top: 16px;
    min-height: 300px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
`;

export default Pros;
