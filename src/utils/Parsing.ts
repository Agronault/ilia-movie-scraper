import Movie from "../types/Movie";
import { RawData } from "./TmdbRetriever";

export default class Parsing {
    static parseRawDataToMovie(rawData: RawData): Movie {
        const movie: Movie = {
            movie_id: rawData.movieRawData.id,
            ...rawData.movieRawData,
            translations: rawData.movieRawTranslations.translations,
        };

        return movie;
    }
}
