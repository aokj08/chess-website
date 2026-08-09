const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();

// /home => GET
// I think this is the code that defines the GET request for the /home router. (verify pls)
router.get("", (req, res, next) => {
    // responds by sending a file, we use our imported root path
    // followed by a specification to our views folder, followed by the filename.
    res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = router;