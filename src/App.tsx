import { useState } from 'react';
import Pros from './components/Pros';
import Cons from './components/Cons';
import './App.css';

export type ItemList = {
  item: string;
  isPro: boolean;
}

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState<ItemList[]>([]);

  const handleBtns = (item: string) => {
    if (text) {
      if (item === "pro") setList([...list, { item: text, isPro: true }]);
      if (item === "con") setList([...list, { item: text, isPro: false }]);
    }
    setText("");
  }

  return (
    <div className="App">
      <h1>Don't be in a haste</h1>
      <div>
        <button
          onClick={() => {
            handleBtns("pro");
          }}
        >
          Left
        </button>
        <input onChange={(event) => setText(event.target.value)} value={text} />
        <button
          onClick={() => {
            handleBtns("con");
          }}
        >
          Right
        </button>
      </div>
      <div className="list-container">
        <Pros prosList={list} />
        <Cons consList={list} />
      </div>
    </div>
  );
}

export default App;
