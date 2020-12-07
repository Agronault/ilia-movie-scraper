const mongoose = require("mongoose");

import MovieModel from "../models/movieModel";
import Movie from "../types/Movie";

export default class Mongo {
    static connect() {
        mongoose.connect("mongodb://localhost/ilia");

        return mongoose;
    }
    static async saveMovie(movie: Movie) {
        await MovieModel.update({ movie_id: movie.movie_id }, movie, {
            upsert: true,
        });
    }
}
