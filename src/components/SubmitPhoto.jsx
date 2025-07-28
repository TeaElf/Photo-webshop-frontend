import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {
  useGetCategoriesQuery,
  useSubmitPhotoMutation,
} from "../templates/services/apiService";
import { useAuth } from "../auth/useAuth";

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

export default function SubmitPhoto() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [path, setPath] = useState("");
  const [photoDetails, setPhotoDetails] = useState([{ size: "", price: "" }]);
  const [categoryId, setCategoryId] = useState("");
  const [orientation, setOrientation] = useState("landscape");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const [submitPhoto] = useSubmitPhotoMutation("");

  const { user } = useAuth();

  const { data: categories } = useGetCategoriesQuery();

  const handleChangeOrientation = (event) => {
    setOrientation(event.target.value);
  };

  const isFormValid = () => {
    if (title.trim() === "" || path.trim() === "") return false;

    const allPhotosDetailsHaveValues = photoDetails.every(
      ({ size, price }) => size.trim() !== "" && price.trim() !== ""
    );
    return allPhotosDetailsHaveValues;
  };

  const processTags = (tagsString) => {
    //split by commas and spaces
    const tagArray = tagsString
      .split(/[, ]+/)
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
    return tagArray;
  };

  const handleAddAnotherItem = () => {
    setPhotoDetails((prev) => [...prev, { size: "", price: "" }]);
  };

  const handleRemoveItem = (removeIndex) => {
    setPhotoDetails((prev) => prev.filter((_, index) => index !== removeIndex));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!isFormValid()) {
        console.error("Form is not valid!");
        return;
      }
      const processedTags = processTags(tags);
      const payload = {
        title: title,
        path: path,
        description: description,
        orientation: orientation,
        categoryId: categoryId,
        photoDetails: photoDetails,
        tags: processedTags,
        userId: user.id,
      };
      const result = await submitPhoto(payload).unwrap();
      const photoId = result.id;
      console.log("photoId: ", photoId);
      navigate(`/sphotopage/${photoId}`);
      console.log("submit photo successful: ", result);
    } catch (err) {
      console.error("Submit photo failed: ", err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Submit a photo
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="path"
                label="URL Path"
                name="path"
                value={path}
                onChange={(e) => setPath(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="category">Category</InputLabel>
                <Select
                  labelId="category"
                  id="category"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  label="Category"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {categories &&
                    categories.content?.map((item, index) => (
                      <MenuItem key={index} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="tags"
                label="Tags"
                name="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <RadioGroup
                aria-label="orientation"
                name="orientation"
                value={orientation}
                onChange={handleChangeOrientation}
              >
                <FormControlLabel
                  value="landscape"
                  control={<Radio color="primary" />}
                  label="Landscape"
                />
                <FormControlLabel
                  value="portrait"
                  control={<Radio color="primary" />}
                  label="Portrait"
                />
              </RadioGroup>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.photoDetailsBox}>
                <Grid container xs={12} spacing={2}>
                  {photoDetails.map((item, index) => (
                    <Grid container item key={index} xs={12} spacing={2}>
                      <Grid item xs={5}>
                        <TextField
                          variant="outlined"
                          required
                          size="small"
                          id="size"
                          label="Size"
                          name="size"
                          value={item.size}
                          onChange={(e) => {
                            const updated = [...photoDetails];
                            updated[index].size = e.target.value;
                            setPhotoDetails(updated);
                          }}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          variant="outlined"
                          required
                          size="small"
                          id="price"
                          label="Price"
                          name="price"
                          value={item.price}
                          onChange={(e) => {
                            const updated = [...photoDetails];
                            updated[index].price = e.target.value;
                            setPhotoDetails(updated);
                          }}
                        />
                      </Grid>
                      <Grid item xs={1} />
                      <Grid item xs={1}>
                        {index > 0 && (
                          <div
                            className={classes.iconButton}
                            onClick={() => handleRemoveItem(index)}
                          >
                            <DeleteOutlineIcon className={classes.icon} />
                          </div>
                        )}
                      </Grid>
                    </Grid>
                  ))}
                  <Grid container item xs={12} spacing={2}>
                    <Grid item xs={12}>
                      <div
                        className={classes.iconButtonRow}
                        onClick={handleAddAnotherItem}
                      >
                        <AddCircleOutlineIcon className={classes.icon} />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={!isFormValid()}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
