// import {configureStore} from '@reduxjs/toolkit'
// // import counterReducer from '../features/counter/counterSlice'

// // import { notesReducer } from '../reducers/notesReducer'
// import {taskReducer} from '../To_Do/reducer/taskReducer'

// export const store = configureStore({
//     reducer: {
//         // counter: counterReducer,
//         // notes:notesReducer
//         tasks:taskReducer
//     }
// })


import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import {taskReducer} from '../To_Do/reducer/taskReducer'
import { combineReducers } from "redux";

const persistConfig = {
  key: "app-storage",
  storage,
};

const rootReducer = combineReducers({
  tasks: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

});

export const persistor = persistStore(store);


