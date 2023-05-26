import { combineReducers, legacy_createStore as createStore} from 'redux';
import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sidebarReducer: sidebarReducer
});
export const store = configureStore({
    reducer: rootReducer,
})

export default store;