import React, { useState } from "react";
import {Box, createTheme, ThemeProvider } from '@mui/material';
import Navbar from "./components/Navbar";

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
        <Box bgcolor={"background.default"} color={"text-primary"}>
            <Navbar/>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
