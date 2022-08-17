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

    return (
        <Main>
            <Header title="Lista zadań" />
            <Container
                title="Dodaj nowe zadanie"
                body={<Form />}
            />
            <Container
                title="Lista zadań"
                body={<Tasks tasks={tasks} hideDone={hideDone} setTasks={setTasks} />}
                extraContent={<Buttons tasks={tasks} hideDone={hideDone} setHideDone={setHideDone} toggleHideDone={toggleHideDone} />}
            />
        </Main>
    );
}

export default App;
