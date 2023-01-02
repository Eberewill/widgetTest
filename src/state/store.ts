import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";


const PERSISTED_KEYS: string[] = [];

const store = configureStore({
  reducer: {

  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
      thunk: true,
    }),
    save({ states: PERSISTED_KEYS }),
  ],
  preloadedState: load({ states: PERSISTED_KEYS }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
