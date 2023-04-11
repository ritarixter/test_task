import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cardReducer } from './reducers/card/card';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;