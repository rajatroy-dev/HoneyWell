import React from "react";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MovieCard(props) {
    const { id, image, name, description } = props;
    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography noWrap gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Typography noWrap variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => navigate(`seats/${id}`)}>Buy Ticket</Button>
                <Button size="small" onClick={() => navigate(`details/${id}`)} >Read More</Button>
            </CardActions>
        </Card>
    );
}
