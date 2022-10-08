import { Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../shared/constants";
import ListOfMovies from "./components/ListOfMovies";

export default function Home() {
    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [hasError, setError] = useState(false);

    useEffect(() => {
        axios.get(`${API_URL}/movies`)
            .then(res => {
                setLoading(false);
                setError(false);
                setMovies(res.data);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
            });
    }, []);

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        );
    } else if (hasError) {
        return (
            <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant="h2">
                Something Went Wrong!
            </Typography>
        );
    }
    return (
        <ListOfMovies movies={movies} />
    );
}