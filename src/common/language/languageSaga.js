import { call, takeEvery, select } from "redux-saga/effects";
import { selectLanguage } from "../common/language/languageSlice";
import { saveLanguageInLocalStorage } from "../common/language/languageInLocalStorage";

function* saveLanguageInLocalStorageHandler() {
    const language = yield select(selectLanguage);
    yield call(saveLanguageInLocalStorage, language);
}

export default function* languageSaga() {
    yield takeEvery("*", saveLanguageInLocalStorageHandler);
}