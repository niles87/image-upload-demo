const router = require("express").Router();
const Image = require("../models/image");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/images", (req, res) => {
  Image.findAll()
    .then((images) => {
      const plain = images.map((image) => image.get({ plain: true }));
      console.log(plain);
      res.render("images", { images: plain });
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
