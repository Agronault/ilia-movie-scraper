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

# Enunciado

Olá Alexandre!

Você está evoluindo em nosso processo seletivo e queremos agradecer o seu empenho e dedicação até aqui!

 

Para entender melhor o seu perfil tecnicamente, te convidamos a realizar um projeto pequeno em Node.Js





NodeJS - Teste Prático



Pontos de atenção:



- É mais importante qualidade de código do que o desafio 100% feito;
- Se não der tempo de fazer todas as funcionalidades, não tem problema nenhum, a ideia é validar a arquitetura, solução de problemas, testes, qualidade do código e etc;
- Você poderá utilizar bibliotecas externas;
- Disponibilizar o código em um repositório público no github preferencialmente.



O que é o desafio:



API Base: https://developers.themoviedb.org/3/gettingstarted/introduction

Endpoints:



- https://developers.themoviedb.org/3/movies/get-movie-details
- https://developers.themoviedb.org/3/movies/get-movie-translations



Objetivo: Construir um micro serviço dockerizado com network compartilhada entre a

aplicação e o banco que seja capaz de capturar e indexar as informações de um filme e suas

legendas em uma base de dados à partir de chamadas a endpoints. Você pode construir

como quiser, mas temos preferência por:



- Docker compose;
- ExpressJS;
- MongoDB;
- PostgreSQL;
- Joi;
- Jest.



Extras não obrigatórios e não eliminatórios:



- Simulação de Pull Request com Code Review.



Quanto tempo tenho para fazer?  



Para a realização do desafio, estipulamos o tempo máximo de 4 dias, a partir da data de envio. A entrega final do seu projeto é para segunda-feira (07/12) até às 14h.



Caso não consiga finalizar no prazo estipulado, tenha qualquer problema ou dúvidas, entra em contato com o nosso time, via mensagem na gupy, que vamos juntos pensar na melhor maneira de seguir com com sua jornada :)

 

Boa sorte Padawan!



Happy coding!



Um sorriso de orelha a orelha,



Time ília Digital
