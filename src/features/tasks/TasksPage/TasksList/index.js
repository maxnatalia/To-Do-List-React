import { List, Item, Content, Button, StyledLinkTask } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "./searchQueryParamName";

const TasksList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
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

