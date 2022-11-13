import { closeModal } from "./modalSlice";
import { Container, Title, ButtonWrapper, Button, ModalWrapper, ClosedIcon, ClosedIconWrapper } from "./styled";
import { useDispatch } from "react-redux";
import { removeAllTasks } from "../../tasksSlice";

const Modal = () => {
    const dispatch = useDispatch();
    return (
        <Container>
            <ModalWrapper>
                <ClosedIconWrapper>
                    <ClosedIcon onClick={() => dispatch(closeModal())}>✖</ClosedIcon>
                </ClosedIconWrapper>
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