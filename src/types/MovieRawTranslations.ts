export interface Translation {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: {
        homepage: string;
        overview: string;
        title: string;
    };
}

export default interface MovieRawTranslations {
    id: number;
    translations: any[];
}
