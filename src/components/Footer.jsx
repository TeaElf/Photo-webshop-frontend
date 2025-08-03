import {
  AppBar,
  Toolbar,
  Link,
  Typography,
  Box,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    bottom: 0,
    position: "relative",
    padding: "7vh 8%",
    backgroundColor: "#F9F9FB",
    color: "#000000",
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
            <Link
              href="https://facebook.com"
              target="blank"
              className={classes.footerText}
            >
              Facebook
            </Link>
            <br />
            <Link
              href="https://instagram.com"
              target="blank"
              className={classes.footerText}
            >
              Instagram
            </Link>
            <br />
            <Link
              href="https://linkedin.com"
              target="blank"
              className={classes.footerText}
            >
              Linkedin
            </Link>
            <br />
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
