import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import Nav from "../../../common/Navigation";
import {Main} from "../../../common/Main";
import { StyledLinkTask } from "../TasksPage/TasksList/styled";

const TaskPage = () => {

    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        <>
            <Nav />
            <Main>
                <Header title="Szczegóły zadania" />
                <Section
                    title={task ? task.content : "Niestety, nie znaleziono zadania😒"}
                    extraContent={""}
                    body={
                        task ?
                            <>
                                <strong>Ukończono:</strong>
                                {task.done ? " Tak" : " Nie"}
                            </> : <StyledLinkTask to="/zadania">Powrót do Strony Głównej</StyledLinkTask>}
                />
            </Main>
        </>
    )
};

export default TaskPage;