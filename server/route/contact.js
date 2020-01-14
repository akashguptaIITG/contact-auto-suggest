const router = require("express").Router();
const dataService = require("../service/data-service");
router.get("/contacts/:name", (req, res) => {
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

module.exports = router;
