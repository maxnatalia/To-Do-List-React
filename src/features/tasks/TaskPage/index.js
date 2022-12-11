import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import Nav from "../../../common/Navigation";
import { Main } from "../../../common/Main";
import { StyledLinkTask } from "../TasksPage/TasksList/styled";
import { selectLanguage } from "../../../common/languageSlice";
import descriptions from "../../../common/descriptions";
import Footer from "../../../common/Footer";

const TaskPage = () => {
    const language = useSelector(selectLanguage);
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <>
            <Nav />
            <Main>
                <Header title={descriptions[language].taskPageTitle} />
                <Section
                    title={task ? task.content : descriptions[language].taskStatusNotFound}
                    extraContent={""}
                    body={
                        task ?
                            <>
                                <strong>{descriptions[language].taskStatusLabel}</strong>
                                {task.done
                                    ?
                                    descriptions[language].taskStatusDone
                                    :
                                    descriptions[language].taskStatusUndone
                                }
                            </> : <StyledLinkTask to="/zadania">{descriptions[language].pageLink}</StyledLinkTask>}
                />
            </Main>
            <Footer />
        </>
    )
};

export default TaskPage;