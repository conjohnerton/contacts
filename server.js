// TODO: update path after establishing database
// TODO: rename to server.js
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require('config');
const cors = require("cors");
require("dotenv").config();

app.use(express.json());

//const morgan = require('morgan')
const PORT = process.env.PORT || 3001;
const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose
	.connect(url, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true
	})
	.then((result) => {
		console.log("connected to MongoDB");
	})
	.catch((error) => {
		console.log("error connecting to MongoDB:", error.message);
	});

app.use('/api/contacts', require('./routes/api/contacts'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/users', require('./routes/api/auth'));




//app.use(bodyParser.json());
//app.use(morgan('combined'))

app.use(cors());



app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
