import React from "react";
import TitledCardBlock from "./TitledCardBlock";
import CtaBlock from "./CtaBlock";
import SpecificCategory from "./SpecificCategory";

const HomePage = () => {
  return (
    <div>
      <div>
        <SpecificCategory category="Nature" />
        <SpecificCategory category="Architecture" />
      </div>

      <CtaBlock></CtaBlock>
      <TitledCardBlock title="Newest" />
      <TitledCardBlock title="Most popular" />
    </div>
  );
};

export default HomePage;
