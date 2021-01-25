const router = require("express").Router();
const { searchCountry } = require("../controller");

router.get('/country/:name', searchCountry);

module.exports = router;
