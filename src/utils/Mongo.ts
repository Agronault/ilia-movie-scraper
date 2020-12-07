const mongoose = require("mongoose");

import MovieModel from "../models/movieModel";
import Movie from "../types/Movie";

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB,
} = process.env;

export default class Mongo {
    static connect() {
        if (process.env.NODE_ENV === "docker") {
            mongoose
                .connect(
                    `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
                    { useNewUrlParser: true }
                )
                .then(() => {
                    console.log("MongoDB connected");
                })
                .catch((err: any) => {
                    console.log(err);
                });
        } else {
            mongoose.connect("mongodb://localhost/ilia");
        }

        return mongoose;
    }
    static async saveMovie(movie: Movie) {
        await MovieModel.update({ movie_id: movie.movie_id }, movie, {
            upsert: true,
        });
    }
}
