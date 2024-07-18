import { useState } from "react";

const TravelForm = ({ onAddItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const handleAddItems = (e) => {
    e.preventDefault();

    if (!description) return;
    const newItem = { id: new Date(), description, quantity, packed: false };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  };
  return (
    <form onSubmit={handleAddItems}>
      <label>What do you need for your trip😍?</label>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default TravelForm;
