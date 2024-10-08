import React from "react";
import CardContainer from "./MainComponents/CardContainer";
import BlankContainer from "./MainComponents/BlankContainer";
import Product from "../../Product/Product";

function Main() {
  return (
    <main className="flex justify-center">
      <div className="w-[65%]">
        <BlankContainer />
        <CardContainer />
      </div>
    </main>
  );
}

export default Main;
