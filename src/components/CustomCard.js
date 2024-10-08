import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function CustomCard({ card, onClick }) {
  return (
    <div style={{marginLeft : "5px"}}>
        <Card onClick={onClick} sx={{ cursor: "pointer", width: "300px", height: "300px"}}>
            <CardMedia
                component="img"
                image={card.imageUrl}
                alt={card.title}
                sx={{ objectFit: "cover", width: "100%", height: "200px" }}     
            />
            <CardContent>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                {card.description}
                </Typography>
            </CardContent>
        </Card>
    </div>
  );
}

export default CustomCard;
