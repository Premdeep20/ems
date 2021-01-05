import { delay, put, takeEvery } from 'redux-saga/effects';
import { SetEventActionTypes, setEventSuccess, navigate } from './action';

export function* setEventJob(SetEventAction) {
    yield put(setEventSuccess(SetEventAction.payload));
    yield delay(1000);
    yield put(navigate());
}

export function* watchSetEventActions() {
    yield takeEvery(SetEventActionTypes.SET_EVENT, setEventJob);
}