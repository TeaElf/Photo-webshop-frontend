import React from "react";
import {
  Box,
  Button,
  Divider,
  InputLabel,
  Typography,
  Select,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { addHashtag } from "../util/stringUtils";
import { handlePrice } from "../util/stringUtils";

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
  subSectionBox: {
    marginTop: "100px",
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
    width: "300px",
    height: "50px",
  },
  buttonCart: {
    height: "50px",
  },
  shoppingCartIcon: {
    fontSize: "22px",
  },
  margin: {
    margin: theme.spacing(1),
  },
  customSelect: {
    minWidth: "150px",
  },
}));

const PhotoDetails = ({ data }) => {
  const classes = useStyles();

  const [size, setSize] = React.useState(data.photoDetails[0].id);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className={classes.divContainer}>
      <Box className={classes.imageContainer}>
        <Box className={classes.sectionBox}>
          <img src={data.path} alt={data.title} className={classes.image} />
        </Box>
        <Box className={classes.sectionBox}>
          <Box>
            <Typography className={classes.typographyMargins} variant="h5">
              {data.title}
            </Typography>
            <Typography className={classes.typographyMargins} variant="h4">
              {handlePrice(
                data.photoDetails.find((detail) => detail.id === size).price
              )}
            </Typography>
            <Divider />
          </Box>
          <Box className={classes.subSectionBox}>
            <Typography
              className={classes.typographyMargins}
              variant="subtitle1"
            >
              Dimensions:
            </Typography>
            <FormControl className={classes.margin}>
              <InputLabel id="custom-select-select-label">
                Select a size
              </InputLabel>
              <Select
                className={classes.customSelect}
                id="custom-select"
                value={size}
                onChange={handleChange}
                //input={<BootstrapInput />}
              >
                {data.photoDetails.map((item) => (
                  <option value={item.id}>{item.size}</option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box className={classes.subSectionBox}>
            <Button
              color="primary"
              variant="contained"
              className={classes.buttonAddToCart}
            >
              Add to cart
            </Button>
            <Button
              color="default"
              variant="outlined"
              className={classes.buttonCart}
            >
              <ShoppingCartOutlinedIcon className={classes.shoppingCartIcon} />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className={classes.descContainer}>
        <Typography className={classes.typographyMargins} variant="subtitle1">
          Description:
        </Typography>
        <Typography className={classes.typographyMargins} variant="subtitle2">
          {data.description}
        </Typography>

        <Typography className={classes.typographyMargins} variant="subtitle1">
          Tags:
        </Typography>
        <Typography className={classes.typographyMargins} variant="subtitle2">
          {data.tags.map((tag) => addHashtag(tag.name) + " ")}
        </Typography>
      </Box>
    </div>
  );
};

export default PhotoDetails;
