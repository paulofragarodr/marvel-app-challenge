import React, { useState, useEffect } from "react";
import "./Paginator.scss";
import Item from "./Item";

interface PaginatorProps {
  total: number;
  limit: number;
  current: number;
  onChange: Function;
}

const Paginator: React.FC<PaginatorProps> = ({
  total,
  limit,
  current,
  onChange,
}) => {
  const [totalPages, setTotalPages] = useState<number>(0);
  useEffect(() => {
    setTotalPages(Math.ceil(total / 20));
  }, [total, limit]);
  return (
    <div className="paginator flex gap-2 mt-5 px-3 py-3">
      {Array.from({ length: totalPages }).map((_, index) => (
        <Item
          count={index + 1}
          current={current}
          onSelect={onChange}
          key={index}
        />
      ))}
    </div>
  );
};

export default Paginator;
