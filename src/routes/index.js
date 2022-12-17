import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostPage from '../template/user-post/post-page';
import PostListPage from '../template/user-post/post-list';
import ProfilePage from '../template/user-profile/profile-page';
import CreateProfile from '../template/user-profile/create-profile';
import ProfileListPage from '../template/user-profile/profile-list';
import PageNotFound from '../template/page-not-found';

const RouteList = () => {
    return (
        <Routes>
            <Route path='/' element={<ProfileListPage />} />
            <Route path='/create-post' element={<PostPage/>} />
            <Route path='/post-list' element={<PostListPage />} />
            <Route path='/create-profile' element={<CreateProfile />} />
            <Route path='/profile-page' element={<ProfilePage />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
};

export default RouteList;
