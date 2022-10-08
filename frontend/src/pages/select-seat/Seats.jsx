import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, SEAT_EXECUTIVE, SEAT_PREMIUM, SEAT_SILVER } from "../../shared/constants";
import SeatTypeList from "./components/SeatTypeList";

// Let the seat be divided as such
/**
 * {
 *      "silver": {
 *          "A": [0, 0, 0, 0],
 *          "B": [0, 0, 0, 0],
 *          "C": [0, 0, 0, 0]
 *      },
 *      "premium": {
 *          "D": [0, 0, 0, 0],
 *          "E": [0, 0, 0, 0],
 *          "F": [0, 0, 0, 0]
 *      },
 *      "executive": {
 *          "G": [0, 0, 0, 0],
 *          "H": [0, 0, 0, 0],
 *          "I": [0, 0, 0, 0]
 *      }
 * }
 * 
 * Use IconButton
 */
export default function Seats() {
    const params = useParams();
    const [isLoading, setLoading] = useState(true);
    const [seat, setSeat] = useState({});
    const [hasError, setError] = useState(false);
    const [total, setTotal] = useState(0);
    const [price, setPrice] = useState({})

    useEffect(() => {
        const id = params.id;

        axios.get(`${API_URL}/seat/${id}`)
            .then(res => {
                setLoading(false);
                setError(false);
                setSeat(res.data.seats);
                setPrice(res.data.price);
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
        <>
            <SeatTypeList type={SEAT_SILVER} seats={seat.silver} price={parseInt(price.silver)} total={total} setTotal={setTotal} />
            <SeatTypeList type={SEAT_PREMIUM} seats={seat.premium} price={parseInt(price.premium)} total={total} setTotal={setTotal} />
            <SeatTypeList type={SEAT_EXECUTIVE} seats={seat.executive} price={parseInt(price.executive)} total={total} setTotal={setTotal} />
            <Typography variant="h5">
                Total: {total}
            </Typography>
        </>
    );
}