//import more dependencies

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../api/routes");

//defining the port
const PORT = 3005;

//setting up our app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", routes);

//our server will be listening on a port 3005
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));