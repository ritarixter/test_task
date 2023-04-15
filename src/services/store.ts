import { configureStore, ThunkAction, Action, ActionCreator, AnyAction } from '@reduxjs/toolkit';
import { cardReducer } from './reducers/card/card';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, any, AnyAction>
>;