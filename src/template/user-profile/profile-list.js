import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';

import fallback_img from '../../images/profile-fallback-img.jpeg';
import ProfileService from '../../utils/profile-service';

const ProfileListPage = () => {
    const [profileList, setProfileList] = useState([]);

    useEffect(() => {
        getProfileList();
    }, []);

    const getProfileList = async () => {
        const response = await ProfileService.fetchAllProfile();
        const data = response.data;
        setProfileList(data);
        storeRequiredDataIntoSessionStorage(data);
    }

    const storeRequiredDataIntoSessionStorage = (data) => {
        const currentData = data[0];
        const { name, email } = currentData;
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
    }

    const handleProfileEdit = (e, id) => {
        e.preventDefault();
        // history(' /userUpdate', { state: { id: id } });
        console.log("edit", id)
    }

    return (
        <Container fluid="true">
            <Box sx={{ bgcolor: '#F5F6F7', minHeight: '100vh' }}>
                <Grid container direction="row" rowGap={3} justifyContent="space-around" alignItems="center">
                    {
                        profileList?.length &&
                        profileList.map((item) =>
                            <Grid item xs md={10} lg={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                {item.name.substr(0, 2).toUpperCase()}
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={`By: ${item.name}`}
                                        subheader={`Created On: ${item.profile_creation_date}`}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={item.image_url || fallback_img}
                                        alt="cover_image"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {/* This is Hard-coded content, please pass it dynamically */}

                                            Hello there, I am JACK, I love doing comic.
                                            I have been part of various comic film. I also played famous role as MR.Bean
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        <IconButton aria-label="edit" onClick={(e) => handleProfileEdit(e, item._id)}>
                                            <EditIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Container>
    )
}

export default ProfileListPage;
