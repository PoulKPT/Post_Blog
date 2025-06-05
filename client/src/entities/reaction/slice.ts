import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ReactionType = 'like' | 'dislike';

export interface ReactionState {
  [postId: number]: {
    like: number;
    dislike: number;
    userReaction?: ReactionType;
  };
}

const getRandom = (): number => Math.floor(Math.random() * 51);

const initialState: ReactionState = {};

const reactionSlice = createSlice({
  name: 'reaction',
  initialState,
  reducers: {
    initReactions(state, action: PayloadAction<number[]>) {
      action.payload.forEach(postId => {
        if (!state[postId]) {
          state[postId] = {
            like: getRandom(),
            dislike: getRandom(),
          };
        }
      });
    },
    setReaction(state, action: PayloadAction<{ postId: number; reaction: ReactionType }>) {
      const { postId, reaction } = action.payload;
      if (!state[postId]) {
        state[postId] = { like: getRandom(), dislike: getRandom() };
      }
      const prev = state[postId].userReaction;
      if (prev === reaction) {
        state[postId].userReaction = undefined;
        state[postId][reaction]--;
      } else {
        if (prev) state[postId][prev]--;
        state[postId].userReaction = reaction;
        state[postId][reaction]++;
      }
    },
  },
});

export const { setReaction, initReactions } = reactionSlice.actions;
export const reactionReducer = reactionSlice.reducer; 
