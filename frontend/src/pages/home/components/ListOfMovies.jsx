import { Grid } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";

export default function ListOfMovies(props) {
    const { movies } = props;

    return (
        <Grid container alignItems="center" justifyContent="center" spacing={0}>
            {movies.map((item, index) => {
                return (
                    <Grid key={item.id} item xs={12} md={6} lg={3} mb={2}>
                        <MovieCard id={item.id} image={item.image} name={item.name} description={item.description} />
                    </Grid>
                );
            })}
        </Grid>
    );
}
