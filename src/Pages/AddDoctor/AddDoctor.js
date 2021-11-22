import React, {useState} from 'react';
import {TextField, Input} from '@mui/material';
import Button from '@mui/material/Button';

const AddDoctor = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)

    const handleSubmit = e => {
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        fetch('https://glacial-stream-07919.herokuapp.com/doctors', {
            method : 'POST',
            body : formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('doctor added successfully')
                e.target.reset();
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h2>Add a doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Doctor Name" 
                    variant="standard"
                    type = 'name'
                    onChange={(e)=> setName(e.target.value)}
                    required
                    sx={{width : '50%', mb : 3}}
                />
                <br />
                <TextField 
                    label="Doctor Email" 
                    variant="standard"
                    type = 'email'
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                    sx={{width : '50%', mb : 3}}
                />
                <br />
                <Input accept="image/*"
                    sx={{width : '50%', mb : 3}} 
                    onChange={e => setImage(e.target.files[0])}
                    type="file" />
                <br />
                <Button 
                    variant="contained" 
                    sx={{width : '50%', mb : 3}}
                    type='submit'>
                        Add Doctor
                    </Button>
            </form>
        </div>
    );
};

export default AddDoctor;