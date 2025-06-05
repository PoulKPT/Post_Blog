import type { Post } from './types';
import axios from 'axios';

export const fetchPosts = async (title?: string): Promise<Post[]> => {
  let url = 'https://jsonplaceholder.typicode.com/posts';
  if (title) {
    url += `?title=${encodeURIComponent(title)}`;
  }
  const res = await axios.get<Post[]>(url);
  return res.data;
};

export const fetchPostById = async (id: number): Promise<Post> => {
  const res = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.data;
}; 