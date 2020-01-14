const contacts = require("../data/contact");

const getContactListByName = (name = "") => {
  try {
    console.log("getContactListByName: started", name);
    let filteredContacts = [];
    name = name ? name.toLowerCase().trim() : "";
    if (name) {
      filteredContacts = contacts.filter(c =>
        c.name.toLowerCase().includes(name)
      );
    }
    console.log("getContactListByName: completed", name);
    return filteredContacts;
  } catch (err) {
    console.log("getContactListByName: failed", name, err);
  }
};
const getAllContacts = () => contacts;
module.exports = {
  getContactListByName,
  getAllContacts
};
