import { delay, put, takeEvery } from 'redux-saga/effects';
import { EventActionTypes, getEventsSuccess } from './action';

export function* getEventsJob() {
    yield delay(1000);
    yield put(getEventsSuccess());
}

export function* watchEventActions() {
    yield takeEvery(EventActionTypes.GET_EVENTS, getEventsJob);
}