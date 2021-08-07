import axios from "axios";
import React, { useEffect, useState } from "react";
import contactStyles from "../../styles/pages/admin/Contact.module.css";
import ContactItem from "../../components/admin/ContactItem";

interface ContactType {
  id: string;
  name: string;
  email: string;
  description: string;
}

const Contact = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [loading, setLoading] = useState(true);

  const getContacts = () => {
    axios
      .get("/api/contact")
      .then((response) => setContacts(response.data))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => getContacts(), []);

  return (
    <div className={contactStyles.contact}>
      {loading ? (
        <progress />
      ) : (
        contacts.map((contact) => (
          <ContactItem
            key={contact?.id}
            id={contact?.id}
            name={contact?.name}
            email={contact?.email}
            description={contact?.description}
            getContacts={getContacts}
          />
        ))
      )}
    </div>
  );
};

export default Contact;
