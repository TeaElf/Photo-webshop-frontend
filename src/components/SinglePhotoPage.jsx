import React from "react";
import TitledCardBlock from "./TitledCardBlock";
import PhotoDetails from "./PhotoDetails";

const SinglePhotoPage = ({ title }) => {
  return (
    <div>
      <PhotoDetails />
      <TitledCardBlock title={title} />
    </div>
  );
};

export default SinglePhotoPage;
