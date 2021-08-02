import { Typography, Button } from "@material-ui/core";
import React from "react";

const SpecificCategory = ({ category }) => {
  return (
    <div>
      <Typography variant="h6">{category}</Typography>
      <Typography variant="subtitle2">See photography</Typography>
      <Button>See more →</Button>
    </div>
  );
};

export default SpecificCategory;
