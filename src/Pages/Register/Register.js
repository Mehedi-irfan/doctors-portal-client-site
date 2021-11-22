import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import loginimg from '../../images/login.png';
import { Box } from '@mui/system';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const Register = () => {
    
    const {user, registerUser, isLoading, authError} = useAuth()
    const [loginData, setLoginData] = useState();
    const history = useHistory()

    const handleOnBlur = e => {
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData = {...loginData};
         newLoginData[field] = value;
         console.log(newLoginData);
         setLoginData(newLoginData)
    }
    const handleLogInSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your Password not matched')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Box>
           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} md={6}>
                    <Typography variant='h4' sx={{mt : 20, ml : 25}}>
                        Please Register
                    </Typography>
                    {!isLoading &&<form onSubmit={handleLogInSubmit} style={{marginLeft : '100px', marginTop : '20px'}}>
                    <TextField
                    id="standard-basic"
                    label="Enter your Name"
                    onBlur={handleOnBlur}
                    type='text'
                    name='name'
                    variant="standard"
                    sx={{width : '75%', m : 2}}
                    />
                    <TextField
                    id="standard-basic"
                    label="Enter your Email"
                    onBlur={handleOnBlur}
                    type='email'
                    name='email'
                    variant="standard"
                    sx={{width : '75%', m : 2}}
                    />
                    <TextField
                    id="standard-basic"
                    label="Enter your Password"
                    onBlur={handleOnBlur}
                    type='password'
                    name='password'
                    variant="standard"
                    sx={{width : '75%', m : 2}}
                    />
                    <TextField
                    id="standard-basic"
                    label="Enter Re-type your Password"
                    onBlur={handleOnBlur}
                    type='password'
                    name='password2'
                    variant="standard"
                    sx={{width : '75%', m : 2}}
                    />
                    <Button type='submit' variant='contained' sx={{width : '75%', m : 2, py : 1}}>Register</Button>
                    <NavLink to='/login' style={{marginLeft : '80px'}}>
                        <Button variant='text'>Already Register? Please LogIn</Button>
                    </NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress sx={{ml : 30, mt : 20}} color="secondary" />
                    }
                    {
                        user?.email && <Alert variant="outlined" severity="success" sx={{width : '75%', ml : 10}}>
                        User successfully added!
                      </Alert>
                    }
                    {
                        authError && <Alert sx={{width : '75%',  ml : 10}} variant="outlined" severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={6} md={6}>
                    <img src={loginimg} width='100%' alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Register;