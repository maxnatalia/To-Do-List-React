import { List, Item, Content, Button, StyledLinkTask } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "./searchQueryParamName";
import { useQueryParameter } from "./searchParameters";

const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    if (tasks.length <= 0) {
        return (
            <p>📌Nie masz aktualnie żadnych zadań na liście</p>
        );
    };

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        <StyledLinkTask to={`/zadania/${task.id}`}>{task.content}</StyledLinkTask>
                    </Content>
                    <Button remove onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TasksList;

