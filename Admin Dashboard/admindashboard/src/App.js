import React, { useState } from "react";
import {Box, createTheme, ThemeProvider } from '@mui/material';

function App() {
  const [mode, Setmode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Box>
          
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
