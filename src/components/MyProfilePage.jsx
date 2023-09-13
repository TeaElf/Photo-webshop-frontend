import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import profilePhoto from "../assets/img/default-photo-pic.jpg";
import { Avatar, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  descWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const MyProfilePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.rootWrapper}>
      <Avatar alt="Jane Doe" src={profilePhoto} className={classes.large} />
      <Box className={classes.descWrapper}>
        <Typography component="h1" variant="h2">
          Jane Doe
        </Typography>
        <Typography component="h1" variant="h5">
          Hobbyist photographer from Serbia, sharing analog and digital photos.
        </Typography>
        <Typography component="h1" variant="body1">
          Connect with Jane
        </Typography>
      </Box>
    </div>
  );
};

export default MyProfilePage;
