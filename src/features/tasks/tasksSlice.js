import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: addTask }) => {
            tasks.push(addTask);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: id }) => {
            const index = tasks.findIndex(task => task.id === id);
            tasks[index].done = !tasks[index].done
        },
        removeTask: ({ tasks }, { payload: id }) => {
            const index = tasks.findIndex(task => task.id === id);
            tasks.splice(index, 1);
        },
        editTask: ({ tasks }, { payload: { id, content } }) => {
            const index = tasks.findIndex(task => task.id === id);
            tasks[index].content = content;
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        removeAllTasks: state => {
            state.tasks = [];
        },
        fetchExampleTasks: state => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
        fetchExampleTasksError: state => {
            state.loading = false;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    },
});

const selectTaskState = state => state.tasks;

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    editTask,
    setAllDone,
    removeAllTasks,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
    setTasks
} = tasksSlice.actions;
export const selectHideDone = state => selectTaskState(state).hideDone;
export const selectTasks = state => selectTaskState(state).tasks;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = state => selectTasks(state).length > 0;
export const selectIsLoading = state => selectTaskState(state).loading;

export const getTaskById = (state, TaskId) => selectTasks(state).find(({ id }) => id === TaskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default tasksSlice.reducer;
