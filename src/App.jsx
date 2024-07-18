// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import TravelForm from "./TravelForm";
import TravelList from "./TravelList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((i) => [...i, item]);
  };

  const handleRemoveItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <main>
      <Logo />
      <TravelForm onAddItems={handleAddItems} />
      <TravelList
        items={items}
        onToggleItem={handleToggleItem}
        onRemoveItem={handleRemoveItem}
      />
      <Stats items={items} />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
