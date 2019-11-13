const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/meddirectory",{useNewUrlParser:true})
module.exports = mongoose