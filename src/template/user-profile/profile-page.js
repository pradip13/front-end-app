import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import CreateProfile from './create-profile';
import ProfileService from '../../utils/profile-service';

const ProfilePage = () => {
    return (
        <Container fluid="true">
            <Box sx={{ bgcolor: '#F5F6F7', height: '100vh' }}>
                <CreateProfile />
            </Box>
        </Container>
    )
}

export default ProfilePage;
