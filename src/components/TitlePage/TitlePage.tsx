import React from "react";
import "./TitlePage.scss";

interface TitlePageProps {
  text: string;
}

const TitlePage: React.FC<TitlePageProps> = ({ text }) => {
  return <h1 className="mt-0 mb-7 text-7xl w-max mx-auto title">{text}</h1>;
};

export default TitlePage;
