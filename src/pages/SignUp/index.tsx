import React, { useState } from "react"
import {Button, Container, FormControl, Grid, Input, InputLabel, makeStyles, Link, Box, TextField} from '@material-ui/core'
import User from "../../models/User";

const SignUp: React.FC = ()=>{
 
    const useStyles = makeStyles({
        root: {
          marginTop: 30
        }
      });
    
      const classes = useStyles();
      const [user, setuser] = useState<User>({name: '', email: '', password: ''});
      const handleChange = (e:any) =>{
        setuser({
          ...user,
          [e.target.name]: e.target.value
        })
      }
    return(

        <Container>
          <Grid container direction='column' justifyContent='center' alignItems='center'>
            <Grid item>
                <TextField label="Nome" name="nome" onChange={handleChange} value={user.name}>
                </TextField>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor='my-label'>
                  Email
                </InputLabel>
                <Input onChange={handleChange} value={user.email} name='email' id='email' />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor='label-password'>
                  Password
                </InputLabel>
                <Input type='password' onChange={handleChange} name='password' value={user.password} id='password' />
              </FormControl>
            </Grid>
            <Grid item>
              <Button className={classes.root} variant='contained' color='primary'>
              Logar
              </Button>
            </Grid>
          </Grid>
          <Box display="flex" mt={3} alignItems="center" justifyContent="center">
          <Link href="signup">Não tem conta? Cadastre-se</Link>
          </Box>
        </Container>

    )
}
export default SignUp