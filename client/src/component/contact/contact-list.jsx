import React from "react";

export default function ContactList(props) {
  let { contacts = [] } = props;
  return (
    <div>
      {contacts.map(contact => {
        return <p>{contact.name}</p>;
      })}
    </div>
  );
}
