import { call, takeEvery, select } from "redux-saga/effects";
import { selectDarkTheme } from "../common/themeSlice";
import { saveThemeInLocalStorage } from "../common/themeInLocalStorage";

function* saveThemeInLocalStorageHandler() {
    const darkTheme = yield select(selectDarkTheme);
    yield call(saveThemeInLocalStorage, darkTheme);
}

export default function* tasksSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandler)
}