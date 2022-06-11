const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const Image = require("../models/image");

router.post("/image", upload.single("image"), (req, res) => {
  cloudinary.uploader.upload(req.file.path, (err, result) => {
    if (err) throw err;
    Image.create({
      imageName: req.body.fileName,
      imageURL: result.secure_url,
    }).then((imageData) => {
      res.send("complete!");
    });
  });
});

module.exports = router;
