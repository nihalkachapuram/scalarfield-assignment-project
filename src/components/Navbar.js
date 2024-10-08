import React from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaletteIcon from "@mui/icons-material/Palette";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MovieIcon from "@mui/icons-material/Movie";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookIcon from "@mui/icons-material/Book";
import HistoryIcon from "@mui/icons-material/History";

function Navbar({ activePage }) {
  const buttonStyle = {
    color: "#36454F",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "1rem",
    margin: "0 10px",
    "&:hover": {
      color: "#1976d2",
      backgroundColor: "rgba(25, 118, 210, 0.1)",
    },
  };

  const renderNavbarItems = () => {
    switch (activePage) {
      case "Discovery":
        return (
          <>
            <Button sx={buttonStyle} startIcon={<ScienceIcon />}>
              Tech & Science
            </Button>
            <Button sx={buttonStyle} startIcon={<MonetizationOnIcon />}>
              Finance
            </Button>
            <Button sx={buttonStyle} startIcon={<PaletteIcon />}>
              Arts & Culture
            </Button>
            <Button sx={buttonStyle} startIcon={<SportsSoccerIcon />}>
              Sports
            </Button>
            <Button sx={buttonStyle} startIcon={<MovieIcon />}>
              Entertainment
            </Button>
          </>
        );
      case "Library":
        return (
          <>
            <Button sx={buttonStyle} startIcon={<BookmarkIcon />}>
              Saved Articles
            </Button>
            <Button sx={buttonStyle} startIcon={<BookIcon />}>
              Books
            </Button>
            <Button sx={buttonStyle} startIcon={<HistoryIcon />}>
              Recent History
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  if (activePage === "Home" || activePage === "Sign In") {
    return null; 
  }

  return (
    <Box sx={{ marginBottom: "20px" }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#1976d2", borderRadius: "6px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {activePage}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {renderNavbarItems()}
      </Box>
    </Box>
  );
}

export default Navbar;
