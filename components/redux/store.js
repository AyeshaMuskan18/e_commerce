import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import sagaData from './saga';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware:()=>[sagaMiddleWare]
})

sagaMiddleWare.run(sagaData);
export default store;