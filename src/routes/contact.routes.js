const express = require("express");
const router = express.Router();

const ContactController = require("../controllers/contact.controller");

router.post("/contact", ContactController.handle);

module.exports = router;