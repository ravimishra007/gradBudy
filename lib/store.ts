import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";
import favouriteProfessorsReducer from "./features/favourite-professors/FavouriteProfessorsSlice";
import cartReducer from "./features/cart/CartSlice";

const favouriteProfessorsPersistConfig = {
  key: "favouriteProfessors",
  version: 1,
  storage,
};

const cartPersistConfig = {
  key: "cart",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  favouriteProfessors: persistReducer(
    favouriteProfessorsPersistConfig,
    favouriteProfessorsReducer
  ),
  cart: persistReducer(cartPersistConfig, cartReducer),
});

const persistedReducer = persistReducer(
  { key: "root", storage, version: 1 },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const persistor = persistStore(store);
