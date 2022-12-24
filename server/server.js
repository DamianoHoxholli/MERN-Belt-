const express = require("express"),
      app = express(),
      cors = require("cors"),
      port = 8000,
      dbname = "pet-shelter";
    

app.use(cors());
app.use(express.json());

require('./config/mongoose')(dbname);
require('./routes/pet.routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));