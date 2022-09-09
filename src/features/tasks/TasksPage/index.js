import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Main } from "../Main";
import ExtraButton from "./ExtraButton";
import Search from "./Search";

function TasksPage() {
    
    return (
        <Main>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                extraContent={<ExtraButton />}
                body={<Form />}
            />
            <Section
                title="Wyszukiwarka"
                body={<Search />}
            />
            <Section
                title="Lista zadań"
                body={<TasksList />}
                extraContent={<Buttons />}
            />
        </Main>
    );
};

export default TasksPage;
