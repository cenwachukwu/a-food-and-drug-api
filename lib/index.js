const express = require("express");
const app = express();
const parser = require("body-parser");
const Directoryroute = require("../lib/routes/directory")

app.use(parser.json())
app.use(Directoryroute)

app.listen(3000, () =>
  console.log('Betur not check for me, unless youve got a check for me'))
