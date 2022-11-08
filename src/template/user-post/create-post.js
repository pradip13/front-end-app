import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import userImage from '../../images/gfg-logo.jpeg';
import PostListPage from './post-list';

import { PostHelper } from '../../utils/helper';
import PostService from '../../utils/post-service';

const CreatePost = () => {

    const [postCreated, setPostCreated] = useState(false);
    const [postData, setPostData] = useState({
        id: Math.floor(Math.random() * 90000) + 10000,
        image_url: '',
        content: '',
        email: sessionStorage.getItem('email') || '',
        created_by: sessionStorage.getItem('name') || '',
        creation_date: new Date().toDateString(),
        like_count: 0
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setPostData({ ...postData, [name]: value });
    }

    const createPost = (e) => {
        e.preventDefault();

        const isPostContentEmpty = PostHelper.validatePostContent(postData);
        // Input Validation
        if (isPostContentEmpty) {
            // add error notification here
            return;
        }

        createUserPost(e, postData);
    }

    const createUserPost = async (e, data) => {
        const response = await PostService.createPost(data);
        if (response.code === 200) {
            setPostCreated(!postCreated);
            clearPostContent(e);
        }
    }

    const clearPostContent = (e) => {
        e.preventDefault();
        setPostData({ ...postData, image_url: '', content: '' });
    }

    return (
        <>
            <Paper sx={{ p: 2 }}>
                <Box sx={{ flexGrow: 3 }}>
                    <Grid container direction="row">
                        <Grid item xs={3} md={3} lg={1}>
                            <Avatar alt="userImage" src={userImage} />
                        </Grid>
                        <Grid item xs={9} md={9} lg={10}>
                            <Grid container direction="column" alignItems="flex-start" rowSpacing={2}>
                                {/* <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="on"> */}
                                <Grid item xs={4} md={4} lg={6}>
                                    <TextField fullWidth label="Post Image url" id="fullWidth" name="image_url"
                                        value={postData.image_url} onChange={handleInputChange} />
                                </Grid>
                                <Grid item xs={5} md={5} lg={10}>
                                    <TextField fullWidth id="outlined-multiline-static" label="Content" multiline rows={4}
                                        placeholder="what is on your mind geeks?" name="content" value={postData.content} onChange={handleInputChange} />
                                </Grid>
                                <Grid item xs={5} md={5} lg={10}>
                                    <Button variant="outlined" color="error" onClick={clearPostContent}>Clear</Button>
                                    <Button variant="contained" color="success" onClick={createPost}>Create</Button>
                                </Grid>
                                {/* </Box> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

            {/* Post List Component */}
            <PostListPage postCreated={postCreated} />
        </>
    )
}

export default CreatePost;
