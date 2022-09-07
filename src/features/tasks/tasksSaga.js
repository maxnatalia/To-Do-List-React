import { call, put, delay, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess } from "./tasksSlice";

export function* fetchExampleTasksHandler() {
    try {
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak, spróbuj później⌚");
        yield put(fetchExampleTasksError());
    }
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler)
}