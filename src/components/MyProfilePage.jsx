import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Typography, Box, Grid } from "@material-ui/core";
import { useGetUserQuery } from "../templates/services/apiService";
import TitledCardBlock from "./TitledCardBlock";
import EditProfileModal from "./EditProfileModal";

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  homePageWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: theme.spacing(12),
    alignItems: "center",
    width: "80%",
  },
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    marginRight: "60px",
  },
  profileHeader: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: "60px",
  },
  divBodyVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  profileDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  editButton: {
    margin: theme.spacing(5, 0, 0, 0),
    width: theme.spacing(12),
  },
}));

const MyProfilePage = () => {
  const classes = useStyles();
  const mockedUserId = 3;
  const { data } = useGetUserQuery(mockedUserId);
  useEffect(() => {
    console.log("get user data ", data);
  }, [data]);

  return (
    <>
      {data && (
        <div className={classes.rootWrapper}>
          <Box className={classes.homePageWrapper}>
            <div className={classes.profileHeader}>
              <Avatar
                alt="Jane Doe"
                src={data.avatar}
                className={classes.avatar}
              />
              <Box className={classes.profileDescription}>
                <Typography component="h1" variant="h2">
                  {data.name + " " + data.surname}
                </Typography>
                <Typography component="h1" variant="h5">
                  {data.country}
                </Typography>
                <Typography component="h1" variant="body1">
                  {data.email}
                </Typography>
                <br />
                <EditProfileModal profileData={data} />
              </Box>
            </div>

            <Grid className={classes.divBodyVertical}>
              <TitledCardBlock
                title="My photos"
                numOfRows={1}
                defaultFilters={{ size: 4, userId: mockedUserId }}
              />
            </Grid>
          </Box>
        </div>
      )}
    </>
  );
};

export default MyProfilePage;
