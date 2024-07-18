import PackingList from "./PackingList";

const TravelList = ({ items, onToggleItem, onRemoveItem }) => {
  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        listStyle: "none",
        margin: "25px 25px",
        padding: "0",
        gap: "3rem",
        width: "50%",
      }}
    >
      {items.map((item) => {
        return (
          <PackingList
            key={item.id}
            item={item}
            onToggleItem={onToggleItem}
            onRemoveItem={onRemoveItem}
          />
        );
      })}
    </ul>
  );
};
export default TravelList;
