import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";  

const drawerWidth = 240;

function Sidebar({ setActivePage }) {
  const [active, setActive] = useState("Home");

  const handleClick = (item) => {
    setActive(item);
    setActivePage(item);  
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#f5f5f5",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Perplexity Logo" style={{ width: 40, height: 40, marginRight: 10 }} />
          <Typography variant="h6" noWrap component="div">
            Perplexity
          </Typography>
        </Box>
      </Toolbar>

      <List>
        <ListItem
          button
          component={Link}
          to="/"
          onClick={() => handleClick("Home")}
          sx={{
            boxShadow: active === "Home" ? "0px 4px 20px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/discovery"
          onClick={() => handleClick("Discovery")}
          sx={{
            boxShadow: active === "Discovery" ? "0px 4px 20px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Discovery" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/library"
          onClick={() => handleClick("Library")}
          sx={{
            boxShadow: active === "Library" ? "0px 4px 20px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Library" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/signin"
          onClick={() => handleClick("Sign In")}
          sx={{
            boxShadow: active === "Sign In" ? "0px 4px 20px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sign In" />
        </ListItem>

        {/* <ListItem
          button
          onClick={() => handleClick("Sign Out")}
          sx={{
            boxShadow: active === "Sign Out" ? "0px 4px 20px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItem> */}
      </List>
    </Drawer>
  );
}

export default Sidebar;
