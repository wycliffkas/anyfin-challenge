const router = require("express").Router();
const { searchCountry, createUser, login } = require("../controller");
const { checkDuplicateEmail } = require("../middleware/verifySignUp");
const { checkToken } = require("../middleware/authJWT");

router.get("/country/:name", checkToken, searchCountry);
router.post("/", checkDuplicateEmail, createUser);
router.post("/login", login);

module.exports = router;
