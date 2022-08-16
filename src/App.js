import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Header from "./Header";
import Main from "./Main";


const tasks = [
    { id: 1, content: "pranie", done: false },
    { id: 2, content: "odkurzyć", done: true },
];

const hideDoneTasks = false;

function App() {
    return (
        <Main>
            <Header title= "Lista zadań" />
            <Container
                title="Dodaj nowe zadanie"
                body={<Form />}
            />
            <Container
                title="Lista zadań"
                body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                extraContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} 
            />
       </Main>
    );
}

export default App;
