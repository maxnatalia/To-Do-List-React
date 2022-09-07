import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
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
            tasks.findIndex(task => task.id === id);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
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

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, fetchExampleTasksSuccess, fetchExampleTasksError, setTasks } = tasksSlice.actions;
export const selectHideDone = state => selectTaskState(state).hideDone;
export const selectTasks = state => selectTaskState(state).tasks;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = state => selectTasks(state).length > 0;
export const selectIsLoading = state => selectTaskState(state).loading;
export default tasksSlice.reducer;
