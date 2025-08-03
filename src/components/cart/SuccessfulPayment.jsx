import { Typography, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { useAuth } from "../../auth/useAuth";
import { handlePrice } from "../../util/stringUtils";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: "200px",
  },
  pageWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(12),
    alignItems: "center",
    width: "80%",
  },
}));

const SuccessfulPayment = () => {
  const classes = useStyles();
  const { user } = useAuth();

  return (
    <>
      {user && (
        <div className={classes.rootWrapper}>
          <div className={classes.pageWrapper}>
            <div>
              <CheckCircleOutlineIcon
                style={{ color: "#348433", fontSize: 80 }}
              />
              <Typography variant="h3">Payment Successful!</Typography>
              <Typography
                variant="body1"
                style={{
                  marginTop: "25px",
                  marginBottom: "25px",
                  lineHeight: 2,
                }}
              >
                Your payment of <b>{handlePrice(142)}</b> was processed
                successfully.
                <br />
                You can download your photo <a href="">here</a>.
                <br />A confirmation email with a download link has been sent to{" "}
                <b>{user.email}</b>.
              </Typography>
              <Link href="/">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Keep exploring
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SuccessfulPayment;
