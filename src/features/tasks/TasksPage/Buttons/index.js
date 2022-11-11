import { Button, Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectHideDone, selectIsEveryTaskDone, selectAreTasksEmpty } from "../../tasksSlice";
import { openModal } from "../Modal/modalSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);

    const dispatch = useDispatch();
    
    return (
        <Container>
            { areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())} 
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                    <Button
                        onClick={() => dispatch(openModal())}
                    >
                        Usuń wszystkie
                    </Button>
                </>
            )}
        </Container>
    )
};

export default Buttons;