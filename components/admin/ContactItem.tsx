import { IconButton } from "@material-ui/core";
import { DeleteRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { db } from "../../services/firebase";
import contactItemStyles from "../../styles/components/admin/ContactItem.module.css";

interface ContactProps {
  id: string;
  name: string;
  email: string;
  description: string;
  getContacts: Function;
}

const deleteContactFromDB = async (id: string) => {
  await db.collection("Contact").doc(id).delete();
};

const ContactItem = ({
  id,
  name,
  email,
  description,
  getContacts,
}: ContactProps) => {
  const [loading, setLoading] = useState(false);

  const deleteContact = () => {
    if (prompt("Enter password") === "Bhargavi@2012") {
      setLoading(true);
      deleteContactFromDB(id).finally(() => {
        getContacts();
      });
    } else {
      alert(
        "😂 You f*cked yourself by trying to delete, because you are not admin! 🤣🤣"
      );
    }
  };

  return loading ? (
    <div style={{ display: "grid", placeItems: "center" }}>
      <progress />
    </div>
  ) : (
    <div className={contactItemStyles.contactItem}>
      <p className={contactItemStyles.description}>{description}</p>
      <div className={contactItemStyles.bottom}>
        <div className={contactItemStyles.info}>
          <p className={contactItemStyles.name}>{name}</p>
          {email && (
            <a className={contactItemStyles.email} href={`mailto:${email}`}>
              ({email})
            </a>
          )}
        </div>
        <IconButton
          className={contactItemStyles.deleteButton}
          onClick={deleteContact}
          size="small"
        >
          <DeleteRounded />
        </IconButton>
      </div>
    </div>
  );
};

export default ContactItem;
