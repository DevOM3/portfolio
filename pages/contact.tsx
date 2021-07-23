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
        <div className={contactStyles.inputContainer}>
          <label htmlFor="name">Name</label>
          <input id="name" className={contactStyles.input} type="text" />
        </div>
        <div className={contactStyles.inputContainer}>
          <label htmlFor="email">
            Email <small>(optional)</small>
          </label>
          <input id="email" className={contactStyles.input} type="email" />
        </div>
        <div className={contactStyles.inputContainer}>
          <label htmlFor="description">Description</label>
          <textarea id="description" className={contactStyles.input} />
        </div>
      </form>
    </div>
  );
};

export default contact;
