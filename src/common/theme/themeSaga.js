import { call, takeEvery, select } from "redux-saga/effects";
import { selectDarkTheme } from "./themeSlice";
import { saveThemeInLocalStorage } from "../theme/themeInLocalStorage";

function* saveThemeInLocalStorageHandler() {
    const darkTheme = yield select(selectDarkTheme);
    yield call(saveThemeInLocalStorage, darkTheme);
}

export default function* themeSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
}