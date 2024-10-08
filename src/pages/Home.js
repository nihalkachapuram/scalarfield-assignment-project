import React from "react";
import { Typography, Box, Button, Grid2, Paper } from "@mui/material";

function Home() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
        Welcome to Our Wellness Hub!
      </Typography>
      <Typography variant="h6" sx={{ color: '#555', textAlign: 'center', marginBottom: 4 }}>
        Discover a world of tips and advice to enhance your health and well-being.
      </Typography>
      <Box sx={{ marginBottom: 4, padding: 2 }}>
        <Typography variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', marginBottom: 2 }}>
          Our platform is dedicated to promoting healthy living and wellness for individuals of all backgrounds. 
          Whether you’re looking to improve your diet, start a fitness journey, or learn about mindfulness, we have 
          the resources you need to take the first step toward a healthier, happier you.
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          Join us on this journey and explore expert tips, personalized advice, and a supportive community 
          committed to helping you achieve your wellness goals.
        </Typography>
      </Box>
      <Grid2 container spacing={4}>
        <Grid2 item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Personalized Tips</Typography>
            <Typography variant="body2" sx={{ color: '#777', marginY: 2 }}>
              Get tailored recommendations based on your unique health needs.
            </Typography>
            <Button variant="contained" color="primary" size="small">Learn More</Button>
          </Paper>
        </Grid2>
        <Grid2 item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Community Support</Typography>
            <Typography variant="body2" sx={{ color: '#777', marginY: 2 }}>
              Engage with a community of like-minded individuals focused on health.
            </Typography>
            <Button variant="contained" color="primary" size="small">Join Now</Button>
          </Paper>
        </Grid2>
      </Grid2>

      <Box sx={{ textAlign: 'center', marginY: 8 }}>
        <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          Ready to Transform Your Life?
        </Typography>
        <Typography variant="body1" sx={{ color: '#777', marginBottom: 3 }}>
          Sign up now to get started on your personalized wellness journey!
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
