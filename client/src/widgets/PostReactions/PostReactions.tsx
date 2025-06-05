import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { setReaction, initReactions } from '../../entities/reaction/slice';
import type { ReactionType } from '../../entities/reaction/slice';

interface PostReactionsProps {
  postId: number;
  compact?: boolean;
}

const reactionIcons: Record<ReactionType, string> = {
  like: '👍',
  dislike: '👎',
};

export const PostReactions: React.FC<PostReactionsProps> = ({ postId, compact }) => {
  const dispatch = useDispatch();
  const reaction = useSelector((state: RootState) => state.reaction[postId]);

  useEffect(() => {
    dispatch(initReactions([postId]));
  }, [dispatch, postId]);

  if (!reaction) return null;

  if (compact) {
    return (
      <div style={{ display: 'flex', gap: 10 }}>
        {(['like', 'dislike'] as ReactionType[]).map(type => {
          const isActive = reaction.userReaction === type;
          return (
            <button
              key={type}
              onClick={() => dispatch(setReaction({ postId, reaction: type }))}
              style={{
                display: 'flex',
                alignItems: 'center',
                color: isActive ? '#1976d2' : '#888',
                fontSize: 15,
                gap: 4,
                background: 'none',
                border: isActive ? '1.5px solid #1976d2' : '1.5px solid #eee',
                borderRadius: 8,
                padding: '2px 10px',
                cursor: 'pointer',
                transition: 'color 0.2s, border 0.2s',
              }}
            >
              <span>{reactionIcons[type]}</span>
              <span>{reaction[type]}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
      {(['like', 'dislike'] as ReactionType[]).map(type => (
        <button
          key={type}
          onClick={() => dispatch(setReaction({ postId, reaction: type }))}
          style={{
            fontSize: 22,
            padding: '6px 14px',
            borderRadius: 8,
            border: reaction.userReaction === type ? '2px solid #1976d2' : '1px solid #ccc',
            background: reaction.userReaction === type ? '#e3f0ff' : '#fff',
            color: '#222',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span>{reactionIcons[type]}</span>
          <span>{reaction[type]}</span>
        </button>
      ))}
    </div>
  );
}; 