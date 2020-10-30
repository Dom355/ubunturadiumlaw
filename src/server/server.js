const https = require("https");
const fs = require("fs");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");


app.use(cors());
app.use(helmet());
app.use(compression());



const port = process.env.PORT || 3000;
https
    .createServer(app)
    .listen(port, () => console.log(`listening to port ${port}`));