// TODO: update path after establishing database
// TODO: rename to server.js
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const config = require("config");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 3001;
const url = config.get("mongoURI");

mongoose
	.connect(url, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true
	})
	.then((result) => {
		console.log(`Connected to MongoDB url: ${url}`);
	})
	.catch((error) => {
		console.log("error connecting to MongoDB:", error.message);
	});

app.use("/api/contacts", require("./routes/api/contacts"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use(cors());

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
