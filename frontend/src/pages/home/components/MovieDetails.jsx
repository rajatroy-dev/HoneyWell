import { Box, Button, CircularProgress, Divider, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../../shared/constants";

export default function MovieDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [hasError, setError] = useState(false);

    useEffect(() => {
        const id = params.id;

        axios.get(`${API_URL}/movie/${id}`)
            .then(res => {
                setLoading(false);
                setError(false);
                setMovie(res.data);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
            });

    }, [params]);

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
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <img width="500px" src={movie.image} alt="movie" />
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h5">
                {movie.name}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography>
                {movie.description}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography>
                Writers: {movie.writers}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography>
                Stars: {movie.stars}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Button size="small" onClick={() => navigate(`/seats/${movie.id}`)}>Buy Ticket</Button>
        </Box>
    );
}