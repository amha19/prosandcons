import { useEffect, useState } from "react";
import { ItemList } from "../App";

const Cons = (props: { consList: ItemList[] }) => {
  const { consList } = props;

  const [cons, setCons] = useState<ItemList[]>([]);

  useEffect(() => {
    setCons(consList.filter((con) => con.isPro === false));
  }, [consList]);

  return (
    <div>
      <h3>Cons List</h3>
      <ul>
        {cons.map((con, index) => (
          <li key={index}>{con.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cons;
