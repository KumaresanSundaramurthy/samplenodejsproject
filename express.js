const express = require("express");

const app = express();

const PORT = process.env.PORT || 5001;

app.get("/", (req, resp) => {
    resp.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Listening the  port: ${PORT}`);
})