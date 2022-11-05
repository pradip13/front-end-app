import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import ProfileService from '../../utils/profile-service';

const CreateProfile = () => {

    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        image_url: '',
        gender: '',
        age: '',
        DOB: '',
        location: '',
        mobile: '',
        id: Math.floor(Math.random() * 90000) + 10000,
        profile_creation_date: new Date().toDateString()
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    }

    const createProfile = (e) => {
        e.preventDefault();
        console.log(profileData);
    }

    const clearProfileContent = (e) => {
        e.preventDefault();
    }

    return (
        <Paper sx={{ p: 2 }}>
            <Box sx={{ flexGrow: 3 }}>
                <Grid container direction="row" justifyContent="center" alignItems="cener">
                    <Grid item xs={3} md={3} lg={1}>
                        <Avatar alt="userImage" src={profileData.image_url} />
                    </Grid>

                    <Grid item xs={9} md={9} lg={10}>
                        <Grid container direction="row" rowSpacing={2}>
                            <Grid item xs={10} md={6} lg={6}>
                                <TextField fullWidth label="Profile Image Url" id="fullWidth" name="image_url"
                                    value={profileData.image_url} onChange={handleInputChange} />
                            </Grid>
                        </Grid>

                        <Grid container direction="row" rowSpacing={2} columnSpacing={2}>
                            <Grid item xs={10} md={5} lg={5}>
                                <TextField fullWidth label="Name" id="fullWidth" name="name"
                                    value={profileData.name} onChange={handleInputChange} />
                            </Grid>
                            <Grid item xs={10} md={5} lg={5}>
                                <TextField fullWidth label="Email" id="fullWidth" name="email"
                                    value={profileData.email} onChange={handleInputChange} />
                            </Grid>
                        </Grid>


                        <Grid container direction="row" rowSpacing={2} columnSpacing={2}>
                            <Grid item xs={10} md={5} lg={5}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup row aria-labelledby="Gender_label" name="gender">
                                        <FormControlLabel name="gender" value="female" control={<Radio />} label="Female" onChange={handleInputChange} />
                                        <FormControlLabel name="gender" value="male" control={<Radio />} label="Male" onChange={handleInputChange} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={10} md={5} lg={5}>
                                <TextField fullWidth label="Age" id="fullWidth" name="age"
                                    value={profileData.age} onChange={handleInputChange} />
                            </Grid>
                        </Grid>


                        <Grid container direction="row" rowSpacing={2} columnSpacing={2}>
                            <Grid item xs={10} md={5} lg={5}>
                                <TextField type="date" fullWidth label="Birth date" id="fullWidth" name="DOB"
                                    value={profileData.DOB} onChange={handleInputChange}
                                    InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item xs={10} md={5} lg={5}>
                                <TextField fullWidth label="Location" id="fullWidth" name="location"
                                    value={profileData.location} onChange={handleInputChange} />
                            </Grid>
                        </Grid>


                        <Grid container direction="row" rowSpacing={2} columnSpacing={2}>
                            <Grid item xs={4} md={5} lg={5}>
                                <TextField fullWidth label="Mobile number" id="fullWidth" name="mobile"
                                    value={profileData.mobile} onChange={handleInputChange} />
                            </Grid>
                        </Grid>

                        <Grid container direction="row" rowSpacing={2} columnSpacing={2} justifyContent="flex-end" alignItems="flex-end">
                            <Grid item xs={5} md={5} lg={6}>
                                <Button variant="outlined" color="error" onClick={clearProfileContent}>Clear</Button>
                                <Button variant="contained" color="success" onClick={createProfile}>Create</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}

export default CreateProfile;
