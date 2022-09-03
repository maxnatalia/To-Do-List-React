import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Main } from "../../Main";
import { useState } from "react";
import { useTasks } from "../../useTasks";

function App() {
    
    const [hideDone, setHideDone] = useState(false);
    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };
    
    const {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    } = useTasks();

    return (
        <Main>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form addNewTask={addNewTask} />}
            />
            <Section
                title="Lista zadań"
                body={<TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
                extraContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />}
            />
        </Main>
    );
};

export default App;
