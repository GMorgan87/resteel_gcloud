const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const logger = require('./logger/logger')

const port = process.env.PORT || 3000;

const app = express();


app.use(bodyParser.json())

app.use("/api", require("./routes/routes"))

app.get("*", function(req, res) {
    logger.info("empty base route");
    res.send("There's nothing here");
})

app.listen(port, () => logger.info(`listening on port ${port}`))