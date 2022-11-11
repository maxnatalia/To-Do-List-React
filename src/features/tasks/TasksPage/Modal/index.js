import { closeModal } from "./modalSlice";
import { Container, Title, ButtonWrapper, Button, ModalWrapper } from "./styled";
import { useDispatch } from "react-redux";
import { removeAllTasks } from "../../tasksSlice";

const Modal = () => {
    const dispatch = useDispatch();
    return (
        <Container>
            <ModalWrapper>
                <Title>Czy na pewno chcesz usunąć wszystkie zadania?</Title>
                <ButtonWrapper>
                    <Button
                        onClick={() => {
                            dispatch(removeAllTasks());
                            dispatch(closeModal());
                        }}
                    >
                        TAK
                    </Button>
                    <Button
                        onClick={() => {
                            dispatch(closeModal());
                        }}>NIE</Button>
                </ButtonWrapper>
            </ModalWrapper>
        </Container>
    )
};

export default Modal;