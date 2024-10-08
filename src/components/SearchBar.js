import React from "react";
import { TextField, Box, Button } from "@mui/material";

function SearchBar() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
      <TextField
        label="Ask anything..."
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 600 }}
      />
      <Button variant="contained" color="primary" sx={{ marginLeft: "10px" }}>
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
