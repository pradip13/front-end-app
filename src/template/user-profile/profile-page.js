// View and edit your profile 

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import CreateProfile from '../user-profile/create-profile';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {

    const [profileData, setProfileData] = useState({});
    const location = useLocation();

    useEffect(() => {
        // get profile data from previous route path '/'
        setProfileData(location.state.profileData);
    }, [location]);

    return (
        <Container fluid="true">
            <Box sx={{ bgcolor: '#F5F6F7', minHeight: '100vh' }}>
                <CreateProfile mode="edit" data={profileData} />
            </Box>
        </Container>
    )
}

export default ProfilePage;
