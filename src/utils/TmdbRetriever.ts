import Axios from "axios";

import tmdbKey from "../keys/tmdbKey";
import MovieRawData from "../types/MovieRawData";
import MovieRawTranslations from "../types/MovieRawTranslations";

export interface RawData {
    movieRawData: MovieRawData;
    movieRawTranslations: MovieRawTranslations;
}

class TmdbRetriever {
    static async retrieveMovieFromTmdb(movieId: number): Promise<RawData> {
        const movieRawData = Axios.get(
            `http://api.themoviedb.org/3/movie/${movieId}`,
            {
                params: { api_key: tmdbKey },
            }
        );

        const movieRawTranslations = Axios.get(
            `http://api.themoviedb.org/3/movie/${movieId}/translations`,
            {
                params: { api_key: tmdbKey },
            }
        );

        return {
            movieRawData: (await movieRawData).data,
            movieRawTranslations: (await movieRawTranslations).data,
        };
    }
}

export default TmdbRetriever;
