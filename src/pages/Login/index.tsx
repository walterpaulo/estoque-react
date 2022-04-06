import React, { useState } from "react"
import {Button, Container, FormControl, Grid, Input, InputLabel, makeStyles, Typography} from '@material-ui/core'
import User from "../../models/User";

const Login: React.FC = ()=>{
 
    const useStyles = makeStyles({
        root: {
          marginTop: 30
        }
      });
    
      const classes = useStyles();
      const [user, setuser] = useState<User>({email: '', password: ''});
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
          <Typography>{user.email}</Typography>
          <Typography>{user.password}</Typography>
        </Container>

    )
}
export default Login