import React, { useState } from 'react';
import { PostsList } from '../../widgets/PostsList/PostsList';
import { SearchPost } from '../../features/SearchPost/SearchPost';

export const PostsPage: React.FC = () => {
  const [search, setSearch] = useState('');

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '32px 0 0 0' }}>
      <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 700, marginBottom: 12 }}>Блог</h1>
      <div style={{ textAlign: 'center', color: '#444', fontSize: 18, marginBottom: 32 }}>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи
      </div>
      <SearchPost onSearch={setSearch} />
      <PostsList search={search} />
    </div>
  );
}; 