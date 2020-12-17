import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import contactsReducer from "./contacts/contactsReducer"
import logger from 'redux-logger'
import authReducer from "./auth/authReducer"

const defaultMiddleware = getDefaultMiddleware();

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: [...defaultMiddleware, logger]
})

export const persistor = persistStore(store);


