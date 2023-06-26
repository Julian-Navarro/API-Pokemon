"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const utils_1 = require("./utils");
const app = express();
app.listen(utils_1.PORT, () => {
    console.log(`Server running on port ${utils_1.PORT}`);
});
