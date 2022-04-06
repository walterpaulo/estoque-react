import React from 'react';
import {Box, Button, Container, createTheme, CssBaseline, FormControl, Grid, Input, InputLabel, makeStyles, ThemeProvider} from '@material-ui/core'
function App() {
  const theme = createTheme({
    palette: {
      type: 'light'
    }

  })
  const useStyles = makeStyles({
    root: {
      marginTop: 30
    }
  });
  const classes = useStyles()
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container>
          <Grid container direction='column' justifyContent='center' alignItems='center'>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor='my-label'>
                  Email
                </InputLabel>
                <Input id='email' />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor='label-password'>
                  Password
                </InputLabel>
                <Input type='password' id='password' />
              </FormControl>
            </Grid>
            <Grid item>
              <Button className={classes.root} variant='contained' color='primary'>
              Logar
              </Button>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
  );
}

export default App;
