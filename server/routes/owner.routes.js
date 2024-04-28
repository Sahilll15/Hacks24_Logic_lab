const router = require("express").Router();

const {fetchProjectById, fetchProjectsByOwner} = require("../controllers/owner.controllers");
const {validateToken} = require('../middleware/validateToken')
router.get("/", validateToken, fetchProjectsByOwner);
router.get("/:id", validateToken, fetchProjectById);

module.exports = router;
