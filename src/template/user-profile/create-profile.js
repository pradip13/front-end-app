import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
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
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

import { ProfileHelper } from '../../utils/helper';
import ProfileService from '../../utils/profile-service';

const CreateProfile = ({ mode, data }) => {

    const [error, setError] = useState(false);
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        image_url: '',
        gender: '',
        genderType: { male: false, female: false },
        age: '',
        DOB: '',
        location: '',
        mobile: '',
        id: Math.floor(Math.random() * 90000) + 10000,
        profile_creation_date: new Date().toDateString()
    });

    useEffect(() => {
        if (mode === 'edit') {
            setProfileData(profileData =>
            ({
                ...profileData, ...data,
                ...profileData.id = data._id,
                ...profileData.genderType[data.gender] = true
            })
            );
        }
    }, [mode, data])

    const ageList = [];
    for (let number = 18; number < 99; number++) {
        ageList.push(number);
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        setProfileData({ ...profileData, [name]: value, });

        if (name === 'gender' && value === 'male') {
            profileData.genderType.male = true;
            profileData.genderType.female = false;
        } else if (name === 'gender' && value === 'female') {
            profileData.genderType.female = true;
            profileData.genderType.male = false;
        }
    }

    const createProfile = (e) => {
        e.preventDefault();

        const isProfileInputsAreValid = ProfileHelper.validateProfileInputField(profileData);

        if (isProfileInputsAreValid) {
            if (mode === 'edit') {
                updateUserProfile(profileData);
            } else {
                createUserProfile(profileData);
            }
        } else {
            setError(!isProfileInputsAreValid);
        }
    }

    const createUserProfile = async (data) => {
        const response = await ProfileService.createProfile(data);
        console.log(response);
    }

    const updateUserProfile = async (data) => {
        const response = await ProfileService.updateProfile(data);
        console.log(response);
    }

    const clearProfileContent = (e) => {
        e.preventDefault();
        // TODO: As a Part of Assignment
    }

    return (
        <Container fluid="true">
            <Box sx={{ bgcolor: '#F5F6F7', height: '100vh' }}>
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
                                            value={profileData.name} onChange={handleInputChange}
                                            error={(error && !profileData.name) ?? false}
                                            helperText={error && !profileData.name ? `Inavalid name` : ''} />
                                    </Grid>
                                    <Grid item xs={10} md={5} lg={5}>
                                        <TextField fullWidth label="Email" id="fullWidth" name="email"
                                            value={profileData.email} onChange={handleInputChange}
                                            error={(error && !profileData.email) ?? false}
                                            helperText={error && !profileData.email ? `Inavalid Email` : ''} />
                                    </Grid>
                                </Grid>


                                <Grid container direction="row" rowSpacing={2} columnSpacing={2}>
                                    <Grid item xs={10} md={5} lg={5}>
                                        <FormControl>
                                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                            <RadioGroup row aria-labelledby="Gender_label" name="gender">
                                                <FormControlLabel name="gender" value="female" checked={profileData.genderType.female} control={<Radio />} label="Female" onChange={handleInputChange} />
                                                <FormControlLabel name="gender" value="male" checked={profileData.genderType.male} control={<Radio />} label="Male" onChange={handleInputChange} />
                                            </RadioGroup>
                                            {
                                                (error && !profileData.gender) ?
                                                    <FormHelperText id="gender-error" style={{ color: 'red' }}>Please select any one</FormHelperText>
                                                    : ''
                                            }
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={10} md={5} lg={5}>
                                        <TextField select fullWidth label="Age" id="fullWidth" name="age"
                                            value={profileData.age} onChange={handleInputChange}
                                            error={(error && !profileData.age) ?? false}
                                            helperText={error && !profileData.age ? `Inavalid age` : ''}>
                                            {
                                                ageList.map((age) =>
                                                    <MenuItem key={age} value={age}>{age}</MenuItem>)
                                            }
                                        </TextField>
                                    </Grid>
                                </Grid>


                                <Grid container direction="row" rowSpacing={2} columnSpacing={2}>
                                    <Grid item xs={10} md={5} lg={5}>
                                        <TextField type="date" fullWidth label="Birth date" id="fullWidth" name="DOB"
                                            value={profileData.DOB} onChange={handleInputChange}
                                            InputLabelProps={{ shrink: true }}
                                            error={(error && !profileData.DOB) ?? false}
                                            helperText={error && !profileData.DOB ? `Inavalid DOB` : ''} />
                                    </Grid>
                                    <Grid item xs={10} md={5} lg={5}>
                                        <TextField fullWidth label="Location" id="fullWidth" name="location"
                                            value={profileData.location} onChange={handleInputChange}
                                            error={(error && !profileData.location) ?? false}
                                            helperText={error && !profileData.location ? `Inavalid Location` : ''} />
                                    </Grid>
                                </Grid>


                                <Grid container direction="row" rowSpacing={2} columnSpacing={2}>
                                    <Grid item xs={4} md={5} lg={5}>
                                        <TextField fullWidth label="Mobile number" id="fullWidth" name="mobile"
                                            value={profileData.mobile} onChange={handleInputChange}
                                            error={(error && (!profileData.mobile || profileData.mobile.length !== 10)) ?? false}
                                            helperText={(error && (!profileData.mobile || profileData.mobile.length !== 10)) ? `Please enter 10 digit mobile nunber` : ''} />
                                    </Grid>
                                </Grid>

                                <Grid container direction="row" rowSpacing={2} columnSpacing={2} justifyContent="flex-end" alignItems="flex-end">
                                    <Grid item xs={5} md={5} lg={6}>
                                        <Button variant="outlined" color="error" onClick={clearProfileContent}>Clear</Button>
                                        <Button variant="contained" color="success" onClick={createProfile}>{mode === 'edit' ? "Edit" : 'Create'}</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}

export default CreateProfile;
