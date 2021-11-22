import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import loginimg from '../../images/login.png';
import { Box } from '@mui/system';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';


const Login = () => {

    const history = useHistory();
    const location = useLocation();

    const [loginData, setLoginData] = useState()
    const {user, isLoading, authError, logInUser, signInWithGoogle} = useAuth();

    const handleOnChange = e => {
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData = {...loginData};
         newLoginData[field] = value;
         setLoginData(newLoginData)
    }

    const handleLogInSubmit = e => {
        logInUser(loginData.email, loginData.password, history, location)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Box>
           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} md={6}>
                    <Typography variant='h4' sx={{mt : 20, ml : 25}}>
                        Please Log In
                    </Typography>
                        {
                            !isLoading &&
                            <form onSubmit={handleLogInSubmit} style={{marginLeft : '100px', marginTop : '20px'}}>
                            <TextField
                                id="standard-basic"
                                label="Enter your Email"
                                onChange={handleOnChange}
                                type='email'
                                name='email'
                                variant="standard"
                                sx={{width : '75%', m : 2}}
                            />
                            <TextField
                                id="standard-basic"
                                label="Enter your Password"
                                onChange={handleOnChange}
                                type='password'
                                name='password'
                                variant="standard"
                                sx={{width : '75%', m : 2}}
                            />
                            <Button type='submit' variant='contained' sx={{width : '75%', m : 2, py : 1}}>Log In</Button>
                            <NavLink to='/register' style={{marginLeft : '80px'}}>
                                <Button variant='text'>New User? Please Register</Button>
                            </NavLink>  
                            </form>
                    }
                    {
                        isLoading && <CircularProgress sx={{ml : 30, mt : 20}} color="secondary" />
                    }
                    {
                        user?.email && <Alert variant="outlined" severity="success" sx={{width : '75%', ml : 10}}>
                        User successfully login!
                      </Alert>
                    }
                    {
                        authError && <Alert sx={{width : '75%',  ml : 10}} variant="outlined" severity="error">{authError}</Alert>
                    }
                    <p style={{marginLeft: '200px'}}>--------------or-------------</p>
                    <Button onClick={handleGoogleSignIn} sx={{width : '50%', ml : 15, py : 1}} variant='contained'>Google Sign In</Button>
                </Grid>
                <Grid item xs={6} md={6}>
                    <img src={loginimg} width='100%' alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;