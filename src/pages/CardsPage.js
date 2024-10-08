import React, { useState } from "react";
import { Grid2 } from "@mui/material";
import CustomCard from "../components/CustomCard";  
import CardDetail from "../components/CardDetail";  
import arts from "../assets/card-images/arts.jpeg";
import techno from "../assets/card-images/techno.jpg";
import fincance from "../assets/card-images/finance.jpg";
import sports from '../assets/card-images/sports.jpg';
import entertainment from '../assets/card-images/entertainment.jpeg'

const cardData = [
  {
    id: 1,
    title: "Tech Innovations",
    description: "Latest trends in technology.",
    imageUrl: techno,    
    largeImageUrl: techno
  },
  {
    id: 2,
    title: "Finance Insights",
    description: "In-depth analysis of finance.",
    imageUrl: fincance,
    largeImageUrl: fincance
  },
  {
    id: 3,
    title: "Arts & Culture",
    description: "Explore arts and culture.",
    imageUrl: arts,
    largeImageUrl: arts
  },
  {
    id: 4,
    title: "Sports",
    description: "Explore sports and games.",
    imageUrl: sports,
    largeImageUrl: sports
  },
  {
    id: 5,
    title: "Sports",
    description: "Explore Entertainment and Fun.",
    imageUrl: entertainment,
    largeImageUrl: entertainment
  }
];

function CardsPage() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div>
      {selectedCard ? (
        <CardDetail card={selectedCard} onClose={() => setSelectedCard(null)} />
      ) : (
        <Grid2 container spacing={3}>
          {cardData.map((card) => (
            <CustomCard key={card.id} card={card} onClick={() => setSelectedCard(card)} />
          ))}
        </Grid2>
      )}
    </div>
  );
}

export default CardsPage;
