import { Document, Schema, Model, model } from "mongoose";

import Movie from "../types/Movie";

const movieSchema: Schema = new Schema(
    {
        movie_id: Number,
        adult: Boolean,
        backdrop_path: String,
        belongs_to_collection: Object,
        budget: Number,
        genres: [],
        homepage: String,
        imdb_id: String,
        original_language: String,
        original_title: String,
        overview: String,
        popularity: Number,
        poster_path: String,
        production_companies: [],
        production_countries: [],
        release_date: String,
        revenue: Number,
        runtime: Number,
        spoken_languages: [],
        status: String,
        tagline: String,
        title: String,
        video: Boolean,
        vote_average: Number,
        vote_count: Number,
        translations: [],
    },
    {
        collection: "movies",
        timestamps: { createdAt: "created_at" },
    }
);

export interface MovieModelInterface extends Document, Movie {}

export default model<MovieModelInterface>("movies", movieSchema);
