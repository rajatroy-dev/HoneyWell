const express = require("express");
const cors = require('cors');

const { movies, movieDetails } = require("./controllers/movies");
const { seatStatus } = require("./controllers/seats");

const app = express();
app.use(cors());
const port = process.env.PORT || "8000";

// api to get list of movies
app.get("/api/movies", movies);

// api to get movie details
app.get("/api/movie/:id", movieDetails);

// api to get seat status
app.get("/api/seat/:id", seatStatus);


app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});