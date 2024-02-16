import React, { useState } from "react";
import {Box, createTheme, ThemeProvider, Stack } from '@mui/material';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";

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
            <Stack direction={'row'} spacing={2} justifyContent={"space-between"}>
              <Sidebar Setmode={Setmode} mode={mode} />
              <Feed />
              <Rightbar />
            </Stack>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
