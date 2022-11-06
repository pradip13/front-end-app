import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ProfileService from '../../utils/profile-service';

const ProfilePage = () => {
    return (
        <Container fluid="true">
            <Box sx={{ bgcolor: '#F5F6F7', minHeight: '100vh' }}>
                this is profile page
            </Box>
        </Container>
    )
}

export default ProfilePage;
