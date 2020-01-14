import React from "react";

export default function ContactList(props) {
  let { contacts = [] } = props;
  return (
    <div className="container">
      {contacts.map((contact, index) => {
        return <h5 key={index}>{contact.name}</h5>;
      })}
    </div>
  );
}
