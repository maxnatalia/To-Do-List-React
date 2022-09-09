import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

const TaskPage = () => {

    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        <>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Niestety, nie znaleziono zadania😒"}
                extraContent={""}
                body={
                    task ?
                        <>
                            <strong>Ukończono:</strong>
                            {task.done ? "Tak" : "Nie"}
                        </> : ""}
            />
        </>
    )
};

export default TaskPage;