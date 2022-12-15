import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/tasksSaga";
import themeSaga from "../src/common/theme/themeSaga";
import languageSaga from "./common/language/languageSaga";

export default function* rootSaga() {
    yield all([
        tasksSaga(),
        themeSaga(),
        languageSaga(),
    ]);
}