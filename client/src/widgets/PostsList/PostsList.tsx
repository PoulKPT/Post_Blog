import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../entities/post/api';
import type { Post } from '../../entities/post/types';
import { PostReactions } from '../PostReactions/PostReactions';

interface PostsListProps {
  search?: string;
}

export const PostsList: React.FC<PostsListProps> = ({ search }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchPosts(search)
      .then(setPosts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [search]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  if (posts.length === 0) return <div>Нет постов</div>;

  const firstPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>
      {/* Первый пост на всю ширину */}
      <div style={{
        background: '#fff',
        borderRadius: 18,
        boxShadow: '0 2px 16px 0 #0001',
        marginBottom: 32,
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <img src={`https://placehold.co/1000x340?text=Post+${firstPost.id}`} alt="Post" style={{ width: '100%', height: 260, objectFit: 'cover', borderTopLeftRadius: 18, borderTopRightRadius: 18 }} />
        <div style={{ padding: '28px 36px 24px 36px', display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{firstPost.title}</h2>
            <div style={{ marginLeft: 24 }}>
              <PostReactions postId={firstPost.id} compact />
            </div>
          </div>
          <p style={{ fontSize: 16, color: '#222', margin: 0, marginBottom: 18 }}>{firstPost.body}</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 18 }}>
            <Link to={`/post/${firstPost.id}`} style={{ textDecoration: 'none' }}>
              <button style={{ padding: '7px 22px', fontSize: 15, borderRadius: 22, background: '#fff', color: '#222', border: '1.5px solid #222', cursor: 'pointer', fontWeight: 500, transition: 'background 0.2s' }}>
                Читать далее
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Остальные посты в две колонки */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 20,
      }}>
        {restPosts.map((post) => (
          <div key={post.id} style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 16px 0 #0001',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 240,
          }}>
            <img src={`https://placehold.co/480x180?text=Post+${post.id}`} alt="Post" style={{ width: '100%', height: 140, objectFit: 'cover' }} />
            <div style={{ padding: '20px 22px 16px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, margin: 0, marginBottom: 0 }}>{post.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <PostReactions postId={post.id} compact />
                </div>
                <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
                  <button style={{ padding: '7px 18px', fontSize: 15, borderRadius: 22, background: '#fff', color: '#222', border: '1.5px solid #222', cursor: 'pointer', fontWeight: 500 }}>
                    Читать далее
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 