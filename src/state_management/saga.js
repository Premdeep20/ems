import { all } from 'redux-saga/effects';
import { watchEventActions } from '../modules/Event/saga';
import { watchSetEventActions } from '../modules/Form/saga';

export default function* rootSaga() {
    yield all([
        watchEventActions(),
        watchSetEventActions(),
    ]);
}
