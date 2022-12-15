import { useSelector, useDispatch } from "react-redux";
import { Button, Container } from "./styled";
import Modal from "../Modal";
import { ConfirmButton } from "../Modal/styled";
import { openModalAll, selectIsOpenAll, closeModal } from "../Modal/modalSlice";
import { toggleHideDone, setAllDone, selectHideDone, selectIsEveryTaskDone, selectAreTasksEmpty, removeAllTasks } from "../../tasksSlice";
import descriptions from "../../../../common/language/descriptions";
import { selectLanguage } from "../../../../common/language/languageSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const language = useSelector(selectLanguage);
    const isOpenAll = useSelector(selectIsOpenAll);
    const dispatch = useDispatch();

    return (
        <Container>
            {areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? descriptions[language].toggleButtonInnerTextHidden : descriptions[language].toggleButtonInnerTextVisible}
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        {descriptions[language].setDoneButtonInnerText}
                    </Button>
                    <Button
                        onClick={() => dispatch(openModalAll())}
                    >
                        {descriptions[language].removeAllInnerText}
                    </Button>
                    {isOpenAll && <Modal
                        titleModal={descriptions[language].modalContentAll}
                        modalClick={
                            <ConfirmButton onClick={() => {
                                dispatch(removeAllTasks())
                                dispatch(closeModal());
                            }}
                            >{descriptions[language].modalApproved}
                            </ConfirmButton>} />
                    }
                </>
            )}
        </Container>
    )
};

export default Buttons;