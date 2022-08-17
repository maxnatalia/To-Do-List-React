import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState(
        [
            { id: 1, content: "pranie", done: false },
            { id: 2, content: "odkurzyć", done: true },
        ]
    );

    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({ ...task, done: true, })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                content: newTaskContent,
                done: false,
                id: tasks.length ? (tasks[tasks.length - 1].id + 1) : 1,
            },
        ]);
    };

    return (
        <Main>
            <Header title="Lista zadań" />
            <Container
                title="Dodaj nowe zadanie"
                body={<Form addNewTask={addNewTask} />}
            />
            <Container
                title="Lista zadań"
                body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
                extraContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />}
            />
        </Main>
    );
}

export default App;
