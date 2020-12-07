import express from "express";

import Mongo from "./utils/Mongo";
import retrieveMovie from "./routes/retrieve-movie";

const api = express();
const port = process.env.PORT || 4000;

api.get("/retrieve-movie", retrieveMovie);

Mongo.connect();
api.listen(port, () => console.log(`Listening on port: ${port}`));
