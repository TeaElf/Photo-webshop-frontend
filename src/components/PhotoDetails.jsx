import React from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  Select,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import defaultPhoto from "../assets/img/default-photo.jpg";
import testPhoto02 from "../assets/img/test-photo-02.jpg";

const useStyles = makeStyles((theme) => ({
  divContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "50px",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    //height: "450px",
    //width: "400px",
    //width: "100%",
    maxHeight: "700px",
    maxWidth: "100%",
  },
  sectionBox: {
    width: "48%",
  },
  descContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  },
  typographyMargins: {
    margin: "10px",
  },
  buttonAddToCart: {
    marginRight: "15px",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const PhotoDetails = () => {
  const classes = useStyles();

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.divContainer}>
      <Box className={classes.imageContainer}>
        <Box className={classes.sectionBox}>
          <img src={defaultPhoto} alt="default" className={classes.image} />
        </Box>
        <Box className={classes.sectionBox}>
          <Typography className={classes.typographyMargins} variant="h5">
            Product Name
          </Typography>
          <Typography className={classes.typographyMargins} variant="h4">
            $4.99 - $12.99
          </Typography>
          <Divider />
          <Typography className={classes.typographyMargins} variant="subtitle1">
            Dimensions:
          </Typography>
          <Typography className={classes.typographyMargins} variant="subtitle2">
            1920px x 1080px
          </Typography>
          <FormControl className={classes.margin}>
            <Select
              id="demo-customized-select-native"
              value={age}
              onChange={handleChange}
              //input={<BootstrapInput />}
            >
              <option aria-label="None" value="" />
              <option value={10}>960x640</option>
              <option value={20}>1920x1080</option>
              <option value={30}>2400x1200</option>
            </Select>
          </FormControl>
          <Button
            color="primary"
            variant="contained"
            className={classes.buttonAddToCart}
          >
            Add to cart
          </Button>
          <Button color="default" variant="outlined">
            <ShoppingCartOutlinedIcon />
          </Button>
        </Box>
      </Box>
      <Box className={classes.descContainer}>
        <Typography className={classes.typographyMargins} variant="subtitle1">
          Description:
        </Typography>
        <Typography className={classes.typographyMargins} variant="subtitle2">
          Nature from above
        </Typography>

        <Typography className={classes.typographyMargins} variant="subtitle1">
          Tags:
        </Typography>
        <Typography className={classes.typographyMargins} variant="subtitle2">
          #wallpaper #flower #spring
        </Typography>
      </Box>
    </div>
  );
};

export default PhotoDetails;
