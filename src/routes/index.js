import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostPage from '../template/user-post/post-page';
import ProfilePage from '../template/user-profile/profile-page';
import PageNotFound from '../template/page-not-found';

const RouteList = () => {
    return (
        <Routes>
            <Route path='/' element={<PostPage />} />
            <Route path='/profile-page' element={<ProfilePage />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
};

export default RouteList;
