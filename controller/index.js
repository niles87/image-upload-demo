const router = require("express").Router();
const imageController = require("./imageupload");
const frontEndController = require("./frontend");

router.use("/api", imageController);
router.use("/", frontEndController);

module.exports = router;
