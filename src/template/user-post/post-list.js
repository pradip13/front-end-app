import React, { useEffect, useState } from 'react';
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

import fallback_img from '../../images/profile-fallback-img.jpeg';
import PostService from '../../utils/post-service';

const PostListPage = ({ postCreated }) => {

    const [postList, setPostList] = useState([]);
    const [postDeleted, setPostDeleted] = useState(false);

    useEffect(() => {
        fetchAllPost()
    }, [postCreated, postDeleted]);

    const fetchAllPost = async () => {
        const response = await PostService.getAllPost();
        setPostList(response.data)
    }

    const deletePost = async (e, profileId) => {
        e.preventDefault();
        const response = await PostService.deletePost(profileId);

        if (response.code === 200) {
            setPostDeleted(!postDeleted)
        }
    }

    return (
        <Grid container direction="row" rowGap={3} justifyContent="center" alignItems="center" style={{ marginTop: '5rem' }}>
            {
                !!postList.length &&
                postList.reverse().map((item) =>
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

                                {/* Button to edit/delete profile */}
                                <Button color="primary">
                                    <Link to="/profile-page" state={{ profileData: item }}>
                                        <EditIcon />
                                    </Link>
                                </Button>
                                <Button color="error" startIcon={<DeleteIcon />} onClick={(e) => deletePost(e, item._id)} />
                            </CardActions>
                        </Card>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default PostListPage;
