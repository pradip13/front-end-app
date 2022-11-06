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

import fallback_img from '../../images/profile-fallback-img.jpeg';

const PostListPage = ({ data=[] }) => {
    return (
        <Grid container direction="row" rowGap={3} justifyContent="center" alignItems="center" style={{marginTop: '5rem'}}>
            {
                !!data.length &&
                data.reverse().map((item) =>
                    <Grid item xs md={10} lg={10}>
                        <Card sx={{ maxWidth: 545 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {item.created_by.substr(0, 2).toUpperCase()}
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={`By: ${item.created_by}`}
                                subheader={`Created On: ${item.creation_date}`}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={item.image_url || fallback_img}
                                alt="cover_image"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {item.content}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>

                        </Card>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default PostListPage;
