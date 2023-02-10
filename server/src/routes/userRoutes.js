const upload = require("../middlewares/upload");
const router = require("express").Router();
const csv = require("csvtojson");
const User = require("../models/user");

router.post("/importfile", upload.single("file"), async (req, res) => {
  console.log("req", req.file);
  try {
    console.log("File:", req.file.path);
    const data = await csv().fromFile(req.file.path);
    const users = await User.insertMany(data);
    return res.status(200).send({ users });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send({ users });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "failed" });
  }
});
module.exports = router;
