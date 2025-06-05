import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostsPage } from '../pages/posts/PostsPage';
import { PostPage } from '../pages/post/PostPage';

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/post/:id" element={<PostPage />} />
    </Routes>
  </BrowserRouter>
); 