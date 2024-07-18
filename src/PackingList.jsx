// import { useState } from "react";

const PackingList = ({ item, onToggleItem, onRemoveItem }) => {
  // const [packed, setPacked] = useState(false);
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
      </span>
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
};
export default PackingList;
