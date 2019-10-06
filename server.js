const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello"));

const port = process.env.PORT || 3007;

app.listen(port, () => console.log(`Server running on port ${port}`));
