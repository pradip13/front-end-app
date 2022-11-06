import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import CreateProfile from '../user-profile/create-profile';
import ProfileService from '../../utils/profile-service';

const ProfilePage = ({profileData}) => {

    useEffect(() => {
        // get profile by ID
    });

    return (
        <Container fluid="true">
            <Box sx={{ bgcolor: '#F5F6F7', minHeight: '100vh' }}>
                <CreateProfile mode="edit" data={profileData} />
            </Box>
        </Container>
    )
}

export default ProfilePage;
