import { Request, Response } from "express";

import messages from "../utils/messages";
import Mongo from "../utils/Mongo";
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
    } else if (Number(req.query.movie_id) <= 0) {
        res.status(404).send({
            message: messages.movie_id_out_of_range,
        });
        return;
    }

    try {
        const movieRawData = await TmdbRetriever.retrieveMovieFromTmdb(
            Number(movieId)
        );
        const movie = Parsing.parseRawDataToMovie(movieRawData);

        await Mongo.saveMovie(movie);

        res.status(200).send({ message: messages.success, data: movie });
    } catch (err) {
        res.status(500).send({
            message: messages.general_error,
            data: JSON.stringify(err),
        });
    }
}

export default retrieveMovie;
