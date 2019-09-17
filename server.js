const express = require("express");
const mongoose = require("mongoose");
const Config = require("config-js");
const config = new Config("./config.js");

// set express configs
const app = express();
app.use(express.json());

// set db configs and connect to db
const db = config.get("mongoURI");
mongoose
	.connect(db, { useNewUrlParser: true, useFindAndModify: false })
	.then(() => console.log("MongoDb Connected..."))
	.catch((err) => console.log(err));

// set routes for express to use
// app.use("/api/users", require("./api/users"));
// app.use("/api/contacts", require("./api/users"));

// config host port and instantiate listener
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
