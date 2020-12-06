import { Request, Response } from "express";
import TmdbRetriever from "../utils/TmdbRetriever";

async function retrieveMovie(req: Request, res: Response) {
    const movieId = req.query.movie_id;
    if (!req.query.movie_id) {
        res.status(404).send({
            message: messages.missing_query,
            missing: ["movie_id"],
        });
        return;
    }

    const movieData = await TmdbRetriever.retrieveMovieFromTmdb(
        Number(movieId)
    );
    res.status(200).send(movieData);
}

export default retrieveMovie;
