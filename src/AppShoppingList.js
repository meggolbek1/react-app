import './App.css';
import {useState} from "react";

function AppShoppingList() {

    const [shoppingList, setShoppingList] = useState(["eggs", "bread"])
    const [newItem, setNewItem] = useState("")

    const onAdd = () => {
        if (newItem && newItem.trim()) {
            setShoppingList([...shoppingList, newItem]);
            setNewItem("");
        }
    }

    const onInputChange = (event) => {
        setNewItem(event.target.value);
    }

  return (
    <div className="App">
      <h1 className="header">
        Shopping List
      </h1>
      <input type="text" value={newItem} onChange={onInputChange}/>
      <button onClick={onAdd}>Add</button>
        <ul>{shoppingList.map((item) => <li>{item}</li>)}</ul>
    </div>
  );
}

export default AppShoppingList;
