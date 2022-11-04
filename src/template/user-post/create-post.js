import React, {useEffect} from 'react';
import userPostService from '../../utils/user-post-service';

const UserPost = () => {
    useEffect(() => {
        getAllPost();
    });

    const getAllPost = async () => {
        const postlist = await userPostService.getUserPosts();
        console.log('postlist', postlist);
    };

    return(
        <>
        <h3>This is create post Page</h3>
        </>
    )
}

export default UserPost;
