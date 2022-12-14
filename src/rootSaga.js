import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/tasksSaga";
import themeSaga from "../src/common/themeSaga";
import languageSaga from "./common/languageSaga";

export default function* rootSaga() {
    yield all([
        tasksSaga(),
        themeSaga(),
        languageSaga(),
    ]);
}