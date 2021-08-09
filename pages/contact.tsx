import { TextareaAutosize } from "@material-ui/core";
import { DoneOutlineRounded, SendRounded } from "@material-ui/icons";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { pageAnimationVariants } from "../services/animations/common";
import {
  contactFormAnimationVariants,
  contactFormInputAnimationVariants,
  contactFormSubmitButtonAnimationVariants,
} from "../services/animations/contact";
import contactStyles from "../styles/pages/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [contacted, setContacted] = useState(false);
  const [{ mode }] = useStateValue();

  const onContactInformationSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/contact", {
        name,
        email,
        description,
      })
      .then(() => {
        setName("");
        setEmail("");
        setDescription("");
        setContacted(true);
      })
      .catch(() => {
        setContacted(false);
      })
      .finally(() => setLoading(false));
  };

  return (
    <motion.div
      className={contactStyles.contact}
      variants={pageAnimationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        backgroundColor: mode === "dark" ? "#111" : "white",
      }}
    >
      <motion.form
        onSubmit={(e) => onContactInformationSubmit(e)}
        className={contactStyles.form}
        variants={contactFormAnimationVariants}
        style={{
          background:
            mode === "dark"
              ? "rgba(0, 0, 0, 0.24)"
              : "rgba(255, 255, 255, 0.24)",
        }}
      >
        <input type="text" hidden value="DevOM" readOnly />
        <motion.div
          className={contactStyles.inputContainer}
          variants={contactFormInputAnimationVariants}
          style={{
            background: mode === "dark" ? "#111" : "white",
          }}
          transition={{
            delay: 1.4,
            duration: 1.1,
          }}
        >
          <label
            style={{
              color: "grey",
            }}
            id="name-label"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            className={contactStyles.input}
            type="text"
            autoComplete="none"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              color: mode === "dark" ? "white" : "#111",
              background: mode === "dark" ? "#111" : "white",
            }}
          />
        </motion.div>
        <motion.div
          className={contactStyles.inputContainer}
          variants={contactFormInputAnimationVariants}
          style={{
            background: mode === "dark" ? "#111" : "white",
          }}
          transition={{
            delay: 1.6,
            duration: 1.1,
          }}
        >
          <label
            style={{
              color: "grey",
            }}
            id="email-label"
            htmlFor="email"
          >
            Email <small>(optional)</small>
          </label>
          <input
            id="email"
            className={contactStyles.input}
            type="email"
            autoComplete="off"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={false}
            style={{
              color: mode === "dark" ? "white" : "#111",
              background: mode === "dark" ? "#111" : "white",
            }}
          />
        </motion.div>
        <motion.div
          className={contactStyles.inputContainer}
          variants={contactFormInputAnimationVariants}
          style={{
            background: mode === "dark" ? "#111" : "white",
          }}
          transition={{
            delay: 1.8,
            duration: 1.1,
          }}
        >
          <label
            style={{
              color: "grey",
            }}
            id="description-label"
            htmlFor="description"
          >
            Description
          </label>
          <TextareaAutosize
            id="description"
            className={contactStyles.input}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{
              color: mode === "dark" ? "white" : "#111",
              background: mode === "dark" ? "#111" : "white",
            }}
          />
        </motion.div>
        {contacted ? (
          <motion.div
            className={contactStyles.doneContainer}
            variants={contactFormSubmitButtonAnimationVariants}
            transition={{
              delay: 0,
            }}
          >
            <DoneOutlineRounded className={contactStyles.doneIcon} />
            <p>Contacted Successfully</p>
          </motion.div>
        ) : loading ? (
          <motion.div
            className={contactStyles.contactLoader}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >
            <SendRounded className={contactStyles.contactLoaderIcons} />
            <SendRounded className={contactStyles.contactLoaderIcons} />
            <SendRounded className={contactStyles.contactLoaderIcons} />
            <SendRounded className={contactStyles.contactLoaderIcons} />
          </motion.div>
        ) : (
          <motion.button
            type="submit"
            className={contactStyles.submitButton}
            variants={contactFormSubmitButtonAnimationVariants}
            transition={{
              delay: 2.0,
            }}
          >
            <p>Contact</p>
            <SendRounded className={contactStyles.sendIcon} />
          </motion.button>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
