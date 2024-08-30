import React from "react";
import { Midia } from "../../types/midia";

interface InfoProps {
  data: Midia | undefined;
  title: string;
}

const InfoDetail: React.FC<InfoProps> = ({ data, title }) => {
  return (
    <>
      <h2 className="mb-2 mt-4">{title}</h2>
      <p className="px-3">
        <ul>
          {data?.items.map((item) => {
            return <li className="py-1">{item.name}</li>;
          })}
        </ul>
      </p>
    </>
  );
};

export default InfoDetail;
