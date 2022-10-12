import { List, Item, Content, Button, StyledLinkTask, EditableContent, ContentInput } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, editTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "./searchQueryParamName";
import { useQueryParameter } from "./searchParameters";
import { useState } from "react";

const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const [editableId, setEditableId] = useState(0);
    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const onEditSave = (id, content) => {
        dispatch(editTask({
            content: newTaskContent.trim() || content,
            id,
        }));

        setEditableId(undefined);
    };
    
    const onEditButtonClick = (id, content) => {
        setEditableId(id);
        setNewTaskContent(content);
    };

    if (tasks.length <= 0) {
        return (
            <p>📌Nie masz aktualnie żadnych zadań na liście</p>
        );
    };

    return (
        <List>
            {tasks.map(({ id, content, done }) => (
                <Item
                    key={id}
                    hidden={done && hideDone}
                >
                    <Button toggleDone onClick={() => dispatch(toggleTaskDone(id))}>
                        {done ? "✔" : ""}
                    </Button>
                    {editableId === id
                        ? (
                            <EditableContent as="form">
                                <ContentInput
                                    autoFocus
                                    value={newTaskContent}
                                    onChange={({ target }) => setNewTaskContent(target.value)} />
                                <Button edit onClick={() => onEditSave(id, content)}>ok</Button>
                            </EditableContent>
                        )
                        : (
                            <EditableContent>
                                <Content done={done}>
                                    <StyledLinkTask to={`/zadania/${id}`}>{content}</StyledLinkTask>
                                </Content>
                                <Button save onClick={() => onEditButtonClick(id, content)}>🖊</Button>
                            </EditableContent>
                        )
                    }
                    <Button remove onClick={() => dispatch(removeTask(id))}>
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TasksList;

