import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById } from '../../entities/post/api';
import type { Post } from '../../entities/post/types';
import { PostReactions } from '../../widgets/PostReactions/PostReactions';

export function PostPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchPostById(Number(id))
      .then(setPost)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!post) return <div>Пост не найден</div>;

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', background: '#fff', minHeight: 600, padding: '32px 0 0 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#222', fontSize: 16 }}>&larr; Вернуться к статьям</Link>
        <PostReactions postId={post.id} />
      </div>
      <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0, textAlign: 'center', marginBottom: 28 }}>{post.title}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
        <img src={`https://placehold.co/700x250?text=Post+${post.id}`} alt="Post" style={{ width: 520, borderRadius: 12, objectFit: 'cover', boxShadow: '0 2px 16px 0 #0001' }} />
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto', fontSize: 17, color: '#222', textAlign: 'center', lineHeight: 1.6 }}>
        {post.body}
      </div>
    </div>
  );
}; 