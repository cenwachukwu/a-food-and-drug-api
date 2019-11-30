const express = require("express");
const cors = require('cors')
const app = express();
const parser = require("body-parser");
const Directoryroute = require("../lib/routes/directory")

app.use(parser.json())
app.use(Directoryroute)
app.use(cors())

// app.listen(3000, () =>
//   console.log('Betur not check for me, unless youve got a check for me'))

// app.set("port", process.env.PORT || 8080);

// app.listen(app.get("port"), () => {
//     console.log(`✅ PORT: ${app.get("port")} 🌟`);
//   });


  app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

