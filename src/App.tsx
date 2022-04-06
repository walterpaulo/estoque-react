import {createTheme, CssBaseline, FormControl, Grid, Input, InputLabel, makeStyles, ThemeProvider, Typography} from '@material-ui/core'
import Router from './router';

function App() {
  const theme = createTheme({
    palette: {
      type: 'light'
    }

  })
 

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router />
      </ThemeProvider>
  );
}

export default App;
