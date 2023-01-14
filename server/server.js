const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;

require("./config/mongoose.config");
app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));

const AllRoutes = require("./routes/project.route");
AllRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}!!`))