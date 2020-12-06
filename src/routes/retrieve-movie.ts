import { Request, Response } from "express";
import TmdbRetriever from "../utils/TmdbRetriever";

async function retrieveMovie(req: Request, res: Response) {
    const movieId = req.query.movie_id;
    if (!req.query.movie_id) {
        res.status(404).send({
            message: messages.missing_query,
            missing: ["movie_id"],
        });
    }

    const movieData = TmdbRetriever.retrieveMovieFromTmdb(Number(movieId));
}

export default retrieveMovie;
