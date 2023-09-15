import {
  AppBar,
  Toolbar,
  Link,
  Typography,
  Box,
  Divider,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // footerRoot: {
  //   flexGrow: 1,
  //   display: "flex",
  // },
  appBar: {
    bottom: 0,
    position: "relative",
    padding: "7vh 8%",
    backgroundColor: "#F9F9FB",
    color: "black",
  },
  copyrightBox: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  footerText: {
    color: "#000000",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <div>
            <Typography>Follow us</Typography>
            <br />
            <Link href="/" className={classes.footerText}>
              {" "}
              Home{" "}
            </Link>
            <br />
            <Link href="/sphotopage/30" className={classes.footerText}>
              Single Photo Page
            </Link>
            <br />
            <Link href="https://facebook.com" className={classes.footerText}>
              Facebook
            </Link>
            <br />
            <Link href="https://instagram.com" className={classes.footerText}>
              Instagram
            </Link>
            <br />
            <Link href="https://linkedin.com" className={classes.footerText}>
              Linkedin
            </Link>
            <br />
            <Link href="/myprofilepage" className={classes.footerText}>
              My profile page
            </Link>
          </div>
        </Toolbar>
        <Box className={classes.copyrightBox}>
          <Divider variant="middle" />
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            Teodora Pekovic &nbsp;
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </AppBar>
    </div>
  );
};

export default Footer;
