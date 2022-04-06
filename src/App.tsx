import React from 'react';
import {Checkbox, createTheme, CssBaseline, FormControl, Input, InputLabel, ThemeProvider} from '@material-ui/core'
function App() {
  const theme = createTheme({
    palette: {
      type: 'light'
    }

  })
  return (
      <ThemeProvider theme={theme}>
        <h1> Hello World</h1>
        <CssBaseline/>

      </ThemeProvider>
  );
}

export default App;
