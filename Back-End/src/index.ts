const express = require("express");
const utils = require("./utils/index.ts")

const app = express();
app.listen(utils.PORT, () => {
    console.log(`Server running on port ${utils.PORT}`);
})