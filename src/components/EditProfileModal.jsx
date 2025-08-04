import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import { useEditUserMutation } from "../templates/services/apiService";

import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  addButton: {
    margin: theme.spacing(3, 0, 2),
  },
  iconButton: {
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  iconButtonRow: {
    height: "40px",
    display: "flex",
    justifyContent: "start",
    "&:hover": {
      cursor: "pointer",
    },
  },
  icon: {
    fontSize: "20px",
  },

  photoDetailsBox: {
    border: "1px solid #cccccc",
    borderRadius: "4px",
    padding: "22px",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function EditProfileModal({ profileData }) {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const [name, setName] = useState(profileData.name);
  const [surname, setSurname] = useState(profileData.surname);
  const [email, setEmail] = useState(profileData.email);
  const [avatar, setAvatar] = useState(profileData.avatar);
  const [country, setCountry] = useState(profileData.country);

  const [editUser] = useEditUserMutation("");

  const isFormValid = () => {
    if (name.trim() === "" || surname.trim() === "" || email.trim() === "") {
      return false;
    } else return true;
  };

  const handleSaveEditProfile = async (e) => {
    e.preventDefault();

    try {
      if (!isFormValid()) {
        console.log("Form is not valid!");
        return;
      }
      const id = profileData.id;

      const payload = {
        name: name,
        surname: surname,
        email: email,
        country: country,
        avatar: avatar,
      };
      await editUser({ id, payload }).unwrap();

      setOpen(false);
    } catch (err) {
      console.error("Edit user failed: ", err);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setName(profileData.name);
    setSurname(profileData.surname);
    setEmail(profileData.email);
    setCountry(profileData.country);
    setAvatar(profileData.avatar);
  };

  return (
    <div>
      <Button
        fullWidth
        variant="contained"
        color="default"
        className={classes.editButton}
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="edit-profile-title"
        open={open}
      >
        <DialogTitle id="edit-profile-title" onClose={handleClose}>
          Edit Profile
        </DialogTitle>
        <DialogContent dividers>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="name"
                      variant="outlined"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="surname"
                      label="Surname"
                      name="surname"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="country"
                      label="Country"
                      name="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="avatar"
                      label="Avatar"
                      name="avatar"
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSaveEditProfile}
                  disabled={!isFormValid()}
                >
                  Save
                </Button>
              </form>
            </div>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}
