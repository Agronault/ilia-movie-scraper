# ilia-movie-scraper

## Run
### Local
`npm i` to install dependencies  
`npm run watch` to execute with nodemon watching  

### Docker
`docker pull mongo:latest` to pull mongodb image  
`docker-compose up --build -d` to compose mongo and api containers  

## Usage

```http
GET /retrieve-movie?movie_id=761053
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `movie_id` | `number` | TMDB Movie ID **(required)** |


```json

{
    "message": "Movie successfully retrieved to database, you might want to check retrieved data on 'data'",
    "data": {
        "movie_id": 761053,
        "adult": false,
        "backdrop_path": "/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg",
        "belongs_to_collection": {
            "id": 729322,
            "name": "Gabriel's Inferno Collection",
            "poster_path": "/hHTzveTImCWuQfpTNiB5yGZOo7e.jpg",
            "backdrop_path": "/hXF55codODfnzTZDExbUbfFmA9y.jpg"
        },
       ...
     }
}

```
