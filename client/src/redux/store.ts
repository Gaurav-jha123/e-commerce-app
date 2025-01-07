import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import booksReducer from './booksSlice';
import cartReducer from './cartSlice';
import rootSaga from './sagas/booksSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({

    reducer : {
        books : booksReducer,
        cart : cartReducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export default store;