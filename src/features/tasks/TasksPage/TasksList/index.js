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
    editTask,
    selectHideDone,
    selectTasksByQuery,
    removeTask
} from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import searchQueryParamName from "./searchQueryParamName";
import { useQueryParameter } from "./searchParameters";
import { selectLanguage } from "../../../../common/languageSlice";
import descriptions from "../../../../common/descriptions";
import { openModal, closeModal, selectIsOpen } from "../Modal/modalSlice";
import Modal from "../Modal";
import { ConfirmButton } from "../Modal/styled";

const TasksList = () => {
    const language = useSelector(selectLanguage);
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const [editableId, setEditableId] = useState(0);
    const [newTaskContent, setNewTaskContent] = useState("");
    const isOpen = useSelector(selectIsOpen);

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
                {descriptions[language].extraContentNoTasks}
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
                                <Button
                                    title={descriptions[language].save}
                                    edit
                                    onClick={() => onEditSave(id, content)}
                                >
                                    OK
                                </Button>
                            </EditableContent>
                        )
                        : (
                            <EditableContent>
                                <Content done={done}>
                                    <StyledLinkTask to={`/zadania/${id}`}>{content}</StyledLinkTask>
                                </Content>
                                <Button
                                    title={descriptions[language].edit}
                                    save
                                    onClick={() => onEditButtonClick(id, content)}
                                >
                                    🖊
                                </Button>
                            </EditableContent>
                        )
                    }
                    <Button
                        title={descriptions[language].remove}
                        remove
                        onClick={() => dispatch(openModal(id))}
                    >
                        🗑
                    </Button>
                    {isOpen &&
                        <Modal
                            titleModal={`Czy jesteś pewien, że chcesz usunąć zadanie: ${content}`}
                            modalClick={
                                <ConfirmButton
                                    onClick={() => {
                                        dispatch(removeTask(id));
                                        dispatch(closeModal());
                                    }}
                                >{descriptions[language].modalApproved}
                                </ConfirmButton>} />}
                </Item>
            ))}
            <ExtraContent>
                {hideDone && !tasks.done
                    ? descriptions[language].extraContentHideDone
                    : descriptions[language].extraContentEmptyList}
            </ExtraContent>
        </List>
    );
};

export default TasksList;

