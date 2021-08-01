import React from "react";
import TitledCardBlock from "./TitledCardBlock";
import CtaBlock from "./CtaBlock";
import SpecificCategory from "./SpecificCategory";

const Home = () => {
  return (
    <div>
      <div>
        <SpecificCategory />
        <SpecificCategory />{" "}
      </div>

      <CtaBlock></CtaBlock>
      <TitledCardBlock></TitledCardBlock>
      <TitledCardBlock></TitledCardBlock>
    </div>
  );
};

export default Home;
