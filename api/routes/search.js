const exprss = require("express");
const router = exprss.Router();

const { searchGetController } = require("../controllers/search");

router.get("/search", searchGetController);

module.exports = router;