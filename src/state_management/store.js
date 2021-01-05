import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducer';
import rootSaga from './saga';
import createSagaMiddleware from 'redux-saga';

const Store = () => {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )

    sagaMiddleware.run(rootSaga);

    return store;

}

const store = Store();

export default store;
