import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import WeekendIcon from '@mui/icons-material/Weekend';
import CloseIcon from '@mui/icons-material/Close';
import { SEAT_EXECUTIVE, SEAT_PREMIUM, SEAT_SILVER } from "../../../shared/constants";

export default function EachSeat(props) {
    const { type, booked, price, total, setTotal } = props;
    const [selected, setSelected] = useState(false);

    const toggleSelection = () => {
        if (selected) {
            setTotal(total - price);
        } else {
            setTotal(total + price);
        }
        setSelected(!selected);
    }

    if (type === SEAT_SILVER) {
        return (
            <IconButton variant="outlined" color={selected ? "success" : "primary"} aria-label="silver seat" disabled={booked} onClick={toggleSelection}>
                <ChairAltIcon />
            </IconButton>
        );
    } else if (type === SEAT_PREMIUM) {
        return (
            <IconButton variant="outlined" color={selected ? "success" : "primary"} aria-label="premium seat" disabled={booked} onClick={toggleSelection}>
                <EventSeatIcon />
            </IconButton>
        );
    } else if (type === SEAT_EXECUTIVE) {
        return (
            <IconButton variant="outlined" color={selected ? "success" : "primary"} aria-label="executive seat" disabled={booked} onClick={toggleSelection}>
                <WeekendIcon />
            </IconButton>
        );
    }

    return (
        <IconButton variant="outlined" disabled>
            <CloseIcon />
        </IconButton>
    );
}