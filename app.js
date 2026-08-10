const express = require("express");
const app = express();
const parser = require("body-parser");
const homeRoute = require("./routes/home");
const path = require("path");

// allows the handler to parse stuff 
app.use(parser.urlencoded({extended: false}));

// serve static files (CSS, images, client JS) from the public folder
app.use(express.static(path.join(__dirname, "public")));

// .use accepts middleware functions which handle http request
app.use("/home", homeRoute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);