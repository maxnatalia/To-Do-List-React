import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./features/tasks/tasksSlice";
import themeReducer from "./common/themeSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        theme: themeReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    localStorage.setItem("theme", JSON.stringify(store.getState().theme.darkTheme));
    localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.tasks))
});

export default store;