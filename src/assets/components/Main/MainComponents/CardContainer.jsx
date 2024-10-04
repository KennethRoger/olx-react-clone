import React from "react";
import Card from "./Card";

function CardContainer() {
  return (
    <>
      <div className="bg-[#F8F9FA] w-full h-80">
        {/* Dont' know the purpose. Seen in the original site  */}
      </div>
      <div>
        <h1 className="text-2xl pt-3 pb-3">Fresh recommendations</h1>
        <div className="grid grid-cols-4 gap-y-8 justify-center mb-20 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default CardContainer;
