import { Request, Response } from "express";

import Parsing from "../utils/Parsing";
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

    const movieRawData = await TmdbRetriever.retrieveMovieFromTmdb(
        Number(movieId)
    );

    const movie = Parsing.parseRawDataToMovie(movieRawData);

    res.status(200).send(movie);
}

export default retrieveMovie;
