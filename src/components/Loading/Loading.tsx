import React from "react";
import  Lottie from "lottie-react";
import animation from "../../assets/animations/loading.json";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="flex flex-column align-items-center justify-content-center py-3">
        <h2 className="text-white text-center py-0">Carregando...</h2>
      <Lottie animationData={animation} loop={true} />
    </div>
  );
}
