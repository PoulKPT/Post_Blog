import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { PostsPage } from '../pages/posts/PostsPage';
import { PostPage } from '../pages/post/PostPage';

export function AppRouter (): React.JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<PostsPage />} />
            <Route path="/post/:id" element={<PostPage />} />
        </Routes>
    )
} 