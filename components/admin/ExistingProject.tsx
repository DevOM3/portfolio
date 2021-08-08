import React, { FormEvent, forwardRef, useState } from "react";
import Image from "next/image";
import existingProjectStyles from "../../styles/components/admin/ExistingProject.module.css";
import projectStyles from "../../styles/pages/admin/Projects.module.css";
import {
  AppBar,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  SlideProps,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Close, DeleteRounded, EditRounded } from "@material-ui/icons";
import { db, storage } from "../../services/firebase";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "black",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = forwardRef<unknown, SlideProps>(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ExistingProjectInterface {
  id: string;
  imageURL: string;
  oldTitle: string;
  oldDescription: string;
  getExistingProjects: Function;
  oldLink: string;
}

const ExistingProject = ({
  id,
  imageURL,
  oldTitle,
  oldDescription,
  getExistingProjects,
  oldLink,
}: ExistingProjectInterface) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);
  const [link, setLink] = useState(oldLink);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editProject = () => handleClickOpen();

  const deleteProject = () => {
    if (prompt("Enter your password") === "Bhargavi@2012") {
      setLoading(true);
      storage
        .refFromURL(imageURL)
        .delete()
        .then(() =>
          db
            .collection("Projects")
            .doc(id)
            .delete()
            .then(() => getExistingProjects())
        );
    } else {
      alert(
        "F*uck yourself and get the hell out of here, you are not admin 🥱!"
      );
    }
  };

  const updateProject = async (e: FormEvent) => {
    e.preventDefault();

    if (prompt("Enter your password") === "Bhargavi@2012") {
      setLoading(true);
      try {
        let newURL = imageURL;
        if (image) {
          const storageRef = await storage.ref(
            `/projects/${image?.name}-${new Date()}`
          );
          await storageRef.put(image);
          newURL = await storageRef.getDownloadURL();
        }
        await axios.put("/api/projects", {
          id,
          newURL,
          title,
          description,
          link,
        });
        setImage(null);
        setTitle("");
        setDescription("");
        getExistingProjects();
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    } else {
      alert(
        "F*uck yourself and get the hell out of here, you are not admin 🥱!"
      );
    }
  };

  return (
    <div className={existingProjectStyles.existingProject}>
      {loading ? (
        <progress style={{ margin: "auto" }} />
      ) : (
        <>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <Close />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Edit project details
                </Typography>
              </Toolbar>
            </AppBar>
            <DialogContent style={{ background: "#111" }}>
              <form
                className={projectStyles.form}
                onSubmit={(e: FormEvent) => updateProject(e)}
                style={{
                  marginTop: 7,
                }}
              >
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  className={projectStyles.imageInput}
                  placeholder="Click here or drag and drop an image to upload"
                  onChange={(e) => setImage(e.target.files?.item(0)!)}
                />
                <input
                  type="text"
                  placeholder="Title"
                  className={projectStyles.input}
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Description"
                  className={projectStyles.input}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Link"
                  className={projectStyles.input}
                  required
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                {loading ? (
                  <progress className={projectStyles.progress} />
                ) : (
                  <input
                    type="submit"
                    value="Add achievement"
                    className={projectStyles.submitButton}
                  />
                )}
              </form>
            </DialogContent>
          </Dialog>
          <div className={existingProjectStyles.imageDiv}>
            <Image
              src={imageURL}
              alt={imageURL}
              height={215}
              width={250}
              layout="responsive"
              className={existingProjectStyles.image}
            />
          </div>
          <p className={existingProjectStyles.title}>{oldTitle}</p>
          <p className={existingProjectStyles.description}>{oldDescription}</p>
          <div className={existingProjectStyles.buttons}>
            <IconButton
              onClick={editProject}
              style={{ color: "white" }}
              size="small"
            >
              <EditRounded />
            </IconButton>
            <IconButton
              onClick={deleteProject}
              style={{ color: "tomato" }}
              size="small"
            >
              <DeleteRounded />
            </IconButton>
          </div>
        </>
      )}
    </div>
  );
};

export default ExistingProject;
