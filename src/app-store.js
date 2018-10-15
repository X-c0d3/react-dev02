// import { applyMiddleware, createStore, Store } from 'redux';
import { createStore } from 'redux';
import commentReducer from './reducers/commentReducer';
// import { AppState } from './app-state';

const appStore =  createStore(commentReducer);

//export const appStore: Store<AppState> = createStore(commentReducer, applyMiddleware(thunk));

export default appStore;