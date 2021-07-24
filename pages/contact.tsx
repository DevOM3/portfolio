import { TextareaAutosize } from "@material-ui/core";
import { SendRounded } from "@material-ui/icons";
import React from "react";
import contactStyles from "../styles/pages/Contact.module.css";

const contact = () => {
  const onContactInformationSubmit = () => {};

  return (
    <div className={contactStyles.contact}>
      <form
        onSubmit={onContactInformationSubmit}
        className={contactStyles.form}
      >
        <input type="text" hidden value="DevOM" />
        <div className={contactStyles.inputContainer}>
          <label id="name-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className={contactStyles.input}
            type="text"
            autoComplete="none"
            placeholder="Name"
          />
        </div>
        <div className={contactStyles.inputContainer}>
          <label id="email-label" htmlFor="email">
            Email <small>(optional)</small>
          </label>
          <input
            id="email"
            className={contactStyles.input}
            type="email"
            autoComplete="off"
            placeholder="Email (optional)"
          />
        </div>
        <div className={contactStyles.inputContainer}>
          <label id="description-label" htmlFor="description">
            Description
          </label>
          <TextareaAutosize
            id="description"
            className={contactStyles.input}
            placeholder="Description"
          />
        </div>
        <button type="submit" className={contactStyles.submitButton}>
          <p>Contact</p> <SendRounded />
        </button>
      </form>
    </div>
  );
};

export default contact;
