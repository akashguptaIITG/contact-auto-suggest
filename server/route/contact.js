const router = require("express").Router();
const dataService = require("../service/data-service");
router.get("/contacts/name/:name", (req, res) => {
  try {
    let name = req.params.name;
    console.log("route: get contact by name", name);
    let filteredContacts = dataService.getContactListByName(name);
    return res.json(filteredContacts);
  } catch (err) {
    console.log("get contacts by name route failed ", err);
    return res.sendStatus(500);
  }
});
router.get("/contacts/all", (req, res) => {
  try {
    console.log("route: get contact all");
    let contacts = dataService.getAllContacts();
    return res.json(contacts);
  } catch (err) {
    console.log("get contacts all route failed ", err);
    return res.sendStatus(500);
  }
});

module.exports = router;
