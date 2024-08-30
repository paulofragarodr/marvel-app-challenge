import React from "react";
import "./Item.scss";

interface ItemProps {
  count: number;
  current: number;
  onSelect: Function;
}

const PaginatorItem: React.FC<ItemProps> = ({ count, current, onSelect }) => {
  function setPage() {
    onSelect(count);
  }
  return (
    <button
      type="button"
      className={`item new-font ${current === count ? "active" : ""}`}
      onClick={setPage}
    >
      <span>{count}</span>
    </button>
  );
};

export default PaginatorItem;
