import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Hooks/UseAuth'

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const {token} = useAuth()

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        const user = {email};
        fetch('https://glacial-stream-07919.herokuapp.com/users/admin', {
            method : 'PUT',
            headers : {
                'authorization' : `Bearer ${token}`,    
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setEmail('')
                setSuccess(true)
                e.target.reset();
            }
        })

        e.preventDefault()
    }

    return (
        <div style={{textAlign : 'center'}}>
            <h2>Make An a admin</h2>
            <form onSubmit={handleSubmit}> 
            <TextField
             id="standard-basic" 
             label="Admin Eamil"
             type='email'
             sx={{width : '75%'}}
            onBlur={handleOnBlur}
             variant="standard" />
             <br />
             <br />
             <Button type='submit' style={{width : '50%'}} variant='contained'>Make Admin</Button>
            </form>
            {
                success && <Alert variant="outlined" severity="success" sx={{width : '75%', ml : 10, mt : 4}}>
                Admin Make successfully!
                </Alert>
            }
        </div>
    );
};

export default MakeAdmin;