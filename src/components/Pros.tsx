import { useEffect, useState } from 'react';
import { ItemList } from '../App';

const Pros = (props: { prosList: ItemList[] }) => {
    const { prosList } = props;

    const [pros, setPros] = useState<ItemList[]>([]);

    useEffect(() => {
        setPros(prosList.filter((pro) => pro.isPro));
    }, [prosList]);

    return (
        <div>
            <h3>Pros List</h3>
            <ul>
                {pros.map((pro, index) => (
                    <li key={index}>{pro.item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Pros;
