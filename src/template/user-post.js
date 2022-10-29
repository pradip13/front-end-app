import React, {useEffect} from 'react';
import postService from '../utils/post-service';

const UserPost = () => {
    useEffect(() => {
        getAllPost();
    });

    const getAllPost = async () => {
        const postlist = await postService.getUserPosts();
        console.log('postlist', postlist);
    };

    return(
        <>
        <h3>This is user's post Page</h3>
        </>
    )
}

export default UserPost;
