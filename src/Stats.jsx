const Stats = ({ items }) => {
  if (!items.length) {
    return <em>Start adding some items to your packing list 🚀</em>;
  }
  const itemLength = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numItemsPacked / itemLength) * 100);
  return (
    <em>
      {percentagePacked === 100
        ? "You are all set ✈!"
        : `You have ${itemLength} item${
            itemLength > 1 ? "s" : ""
          } on your list and you have packed ${numItemsPacked}📦 ${percentagePacked}%🛫`}
    </em>
  );
};
export default Stats;
