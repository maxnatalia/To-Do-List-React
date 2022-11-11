import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./features/tasks/tasksSlice";
import themeReducer from "./common/themeSlice";
import modalReducer from "./features/tasks/TasksPage/Modal/modalSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        theme: themeReducer,
        modal: modalReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;