import { configureStore } from '@reduxjs/toolkit';
import { reactionReducer } from '../entities/reaction/slice';

export const store = configureStore({
  reducer: {
    reaction: reactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 