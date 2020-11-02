const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const laws = require("./routes/laws");

app.use(cors());
app.use(helmet());
app.use(compression());
require("./mongoStart")();
app.use("/api", laws);

const port = process.env.PORT || 3000;
https
    .createServer(app)
    .listen(port, () => console.log(`listening to port ${port}`));