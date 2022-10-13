import {
    List,
    Item,
    Content,
    Button,
    StyledLinkTask,
    EditableContent,
    ContentInput,
    ExtraContent
} from "./styled";
import {
    toggleTaskDone,
    removeTask,
    editTask,
    selectHideDone,
    selectTasksByQuery
} from "../../tasksSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import searchQueryParamName from "./searchQueryParamName";
import { useQueryParameter } from "./searchParameters";

const TasksList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const [editableId, setEditableId] = useState(0);
    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const onEditSave = (id, content) => {
        dispatch(editTask({
            content: newTaskContent.trim(),
            id,
        }));

        setEditableId(content);
    };

    const onEditButtonClick = (id, content) => {
        setEditableId(id);
        setNewTaskContent(content);
    };

    if (tasks.length <= 0) {
        return (
            <ExtraContent>
                📌Nie masz aktualnie żadnych zadań na liście
            </ExtraContent>
        );
    }
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
                                <Button title="Zapisz" edit onClick={() => onEditSave(id, content)}>OK</Button>
                            </EditableContent>
                        )
                        : (
                            <EditableContent>
                                <Content done={done}>
                                    <StyledLinkTask to={`/zadania/${id}`}>{content}</StyledLinkTask>
                                </Content>
                                <Button title="Edytuj" save onClick={() => onEditButtonClick(id, content)}>🖊</Button>
                            </EditableContent>
                        )
                    }
                    <Button title="Usuń" remove onClick={() => dispatch(removeTask(id))}>
                        🗑
                    </Button>
                </Item>
            ))}
            <ExtraContent>
                {hideDone && !tasks.done
                    ? "📌Masz ukryte ukończone zadania - kliknij 'Pokaż ukończone'"
                    : "🧷Nie masz więcej zadań"}
            </ExtraContent>
        </List>
    );
};

export default TasksList;