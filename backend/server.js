const express = require("express");
const mongoose = require('mongoose')

const app = express();

const port = 5001;

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});

mongoose.connect('')
