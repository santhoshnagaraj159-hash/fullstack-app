const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Full Stack App Running From Jenkins Pipeline");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
