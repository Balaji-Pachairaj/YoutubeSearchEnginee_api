const exprss = require("express");
const router = exprss.Router();

const { createStarterRow} = require("../controllers/starter");

router.get("/starter", (req, res) => {
  res.json({ message: "This is the index route!" });
});
router.post("/starter", createStarterRow);

module.exports = router;
