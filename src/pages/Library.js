import React from "react";
import { Typography, Box, Grid2, Paper, Button } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookIcon from "@mui/icons-material/Book";
import HistoryIcon from "@mui/icons-material/History";

function Library() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
        Welcome to Our Library
      </Typography>
      <Typography variant="body1" sx={{ color: '#555', textAlign: 'center', marginBottom: 4 }}>
        Your personal space for saved content, favorite books, and browsing history.
      </Typography>

      <Grid2 container spacing={4}>
        <Grid2 item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <BookmarkIcon sx={{ fontSize: 40, color: '#1976d2' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
              Saved Articles
            </Typography>
            <Typography variant="body2" sx={{ color: '#777', marginY: 2 }}>
              Access all your bookmarked articles in one place for easy reading and reference.
            </Typography>
            <Button variant="contained" color="primary" size="small">
              View Saved Articles
            </Button>
          </Paper>
        </Grid2>

        <Grid2 item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <BookIcon sx={{ fontSize: 40, color: '#1976d2' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
              Books Collection
            </Typography>
            <Typography variant="body2" sx={{ color: '#777', marginY: 2 }}>
              Browse through your personal library of books and publications.
            </Typography>
            <Button variant="contained" color="primary" size="small">
              Explore Books
            </Button>
          </Paper>
        </Grid2>

        <Grid2 item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <HistoryIcon sx={{ fontSize: 40, color: '#1976d2' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
              Recent History
            </Typography>
            <Typography variant="body2" sx={{ color: '#777', marginY: 2 }}>
              Revisit articles and content you’ve viewed recently to continue reading.
            </Typography>
            <Button variant="contained" color="primary" size="small">
              View History
            </Button>
          </Paper>
        </Grid2>
      </Grid2>

      <Box sx={{ textAlign: 'center', marginY: 6 }}>
        <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          Stay Organized, Stay Informed
        </Typography>
        <Typography variant="body1" sx={{ color: '#777', marginBottom: 3 }}>
          Use your library to keep track of important reads, favorite books, and your browsing activity.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Start Adding Content
        </Button>
      </Box>
    </Box>
  );
}

export default Library;
