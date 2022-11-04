import React, {useEffect} from 'react';
import userPostService from '../../utils/user-post-service';

const PostPage = () => {
    useEffect(() => {
        // getAllPost();
    });

    const getAllPost = async () => {
        const postlist = await userPostService.getUserPosts();
        console.log('postlist', postlist);
    };

    return(
        <>
        <h3>This is a  post Page</h3>
        </>
    )
}

export default PostPage;
