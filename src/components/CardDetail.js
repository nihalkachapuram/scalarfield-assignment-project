import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box, Divider, TextField, List, ListItem, ListItemText } from "@mui/material";

function CardDetail({ card, onClose }) {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Card sx={{ maxWidth: 1000, margin: "auto", marginTop: 4, boxShadow: 6, borderRadius: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image={card.largeImageUrl}
          alt={card.title}
          sx={{ borderRadius: "4px 4px 0 0" }}
        />
        <CardContent sx={{ padding: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333" }}>
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
            {card.description}
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ maxWidth: 1000, margin: "auto", marginTop: 4 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Healthy Eating Tips
        </Typography>
        <List>
          {["Eat More Fruits and Vegetables", "Choose Whole Grains Over Processed Foods", "Stay Hydrated", "Limit Added Sugars and Salt"].map((tip, index) => (
            <ListItem key={index} sx={{ borderBottom: "1px solid #ddd" }}>
              <ListItemText
                primary={tip}
                secondary="These tips can help improve your overall diet and promote a healthy lifestyle."
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ marginY: 4 }} />

      <Box sx={{ maxWidth: 1000, margin: "auto", marginTop: 4 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Exercises for Beginners
        </Typography>
        <List>
          {["Start with Light Cardio", "Incorporate Bodyweight Exercises", "Try Yoga or Pilates", "Gradually Increase Your Intensity"].map((exercise, index) => (
            <ListItem key={index} sx={{ borderBottom: "1px solid #ddd" }}>
              <ListItemText
                primary={exercise}
                secondary="These simple exercises are perfect for getting started with fitness at any level."
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ marginY: 4 }} />

      <Box sx={{ maxWidth: 1000, margin: "auto", marginTop: 4 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Reader Comments
        </Typography>
        {["I love these tips!", "The exercise recommendations are so easy to follow.", "Can you include more meal ideas?", "This article has motivated me to start my fitness journey!"].map((comment, index) => (
          <Box key={index} sx={{ marginBottom: 2, padding: 2, backgroundColor: "#f9f9f9", borderRadius: 2 }}>
            <Typography variant="body2" color="textSecondary">
              {comment}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ maxWidth: 1000, margin: "auto", marginTop: 4, textAlign: "end" }}>
        <Button variant="contained" color="primary" onClick={onClose}>
          Back to Cards
        </Button>
      </Box>

      <Box
        component="form"
        sx={{
          position: "fixed",
          height: 30,
          bottom: 40,
          left: "30%",
          width: "40%",
          backgroundColor: "#f5f5f5",
          borderRadius: 8,
          padding: 2,
          boxShadow: "0 -4px 6px rgba(0,0,0,0.3)",
          zIndex: 1000,
        }}
      >
        <TextField
          fullWidth
          placeholder="Ask follow-up"
          variant="outlined"
          sx={{
            height: 30,
            bottom: 12,
          }}
          InputProps={{
            sx: {
              "& fieldset": {
                border: "none", 
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default CardDetail;
