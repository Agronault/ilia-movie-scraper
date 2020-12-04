import express from "express";
const api = express();
const port = process.env.PORT || 4000;

api.get("/", (req, res) => {
    res.send("nothing here yet :c");
});

api.listen(port, () => console.log(`Listening on port: ${port}`));
