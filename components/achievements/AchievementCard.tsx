import { motion } from "framer-motion";
import React, { forwardRef, useState } from "react";
import Image from "next/image";
import achievementCardStyles from "../../styles/components/achievements/AchievementCard.module.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Slide, { SlideProps } from "@material-ui/core/Slide";
import { Close } from "@material-ui/icons";

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

type AchievementCardProps = {
  id: string;
  imageURL: string;
  text: string;
};

const AchievementCard = ({ id, imageURL, text }: AchievementCardProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
              {text}
            </Typography>
          </Toolbar>
        </AppBar>
        <Image
          draggable={false}
          src={imageURL}
          alt=""
          width={100}
          height={100}
          layout="responsive"
          className={achievementCardStyles.dialogImage}
        />
      </Dialog>
      <motion.div
        className={achievementCardStyles.achievementCard}
        onClick={handleClickOpen}
      >
        <Image
          draggable={false}
          src={imageURL}
          alt={imageURL}
          layout="responsive"
          width={500}
          height={500}
          className={achievementCardStyles.achievementCardImage}
        />
        <p className={achievementCardStyles.text}>{text}</p>
      </motion.div>
    </>
  );
};

export default AchievementCard;
