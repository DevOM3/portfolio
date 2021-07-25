import { TextareaAutosize } from "@material-ui/core";
import { DoneOutlineRounded, SendRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { db } from "../services/firebase";
import contactStyles from "../styles/pages/Contact.module.css";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [contacted, setContacted] = useState(false);

  const onContactInformationSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await db.collection("Contact").add({
      name,
      email,
      description,
    });
    setName("");
    setEmail("");
    setDescription("");
    setLoading(false);
    setContacted(true);
  };

  return (
    <div className={contactStyles.contact}>
      <form
        onSubmit={(e) => onContactInformationSubmit(e)}
        className={contactStyles.form}
      >
        <input type="text" hidden value="DevOM" readOnly />
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={false}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        {contacted ? (
          <div className={contactStyles.doneContainer}>
            <DoneOutlineRounded className={contactStyles.doneIcon} />
            <p>Contacted Successfully</p>
          </div>
        ) : loading ? (
          <div className={contactStyles.contactLoader}>
            <SendRounded className={contactStyles.contactLoaderIcons} />
            <SendRounded className={contactStyles.contactLoaderIcons} />
            <SendRounded className={contactStyles.contactLoaderIcons} />
            <SendRounded className={contactStyles.contactLoaderIcons} />
          </div>
        ) : (
          <button type="submit" className={contactStyles.submitButton}>
            <p>Contact</p>
            <SendRounded className={contactStyles.sendIcon} />
          </button>
        )}
      </form>
    </div>
  );
};

export default contact;
