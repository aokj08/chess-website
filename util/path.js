const path = require("path");

// exporting the path to the root of our app
// where does module exports come from, what does .dirname do, what does require.main.filename do?
module.exports = path.dirname(require.main.filename);