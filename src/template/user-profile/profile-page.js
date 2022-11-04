import React, {useEffect} from 'react';
import userPostService from '../../utils/user-post-service';

const ProfilePage = () => {
    useEffect(() => {
        // getAllPost();
    });

    const getAllPost = async () => {
        const postlist = await userPostService.getUserPosts();
        console.log('postlist', postlist);
    };

    return(
        <>
        <h3>This is a  Profile Page</h3>
        </>
    )
}

export default ProfilePage;
