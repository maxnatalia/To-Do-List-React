import { closeModal } from "./modalSlice";
import { Container, Title, ButtonWrapper, ModalWrapper, ClosedIcon, ClosedIconWrapper, ConfirmButton } from "./styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../../common/languageSlice";
import descriptions from "../../../../common/descriptions";

const Modal = ({ titleModal, modalClick }) => {
    const language = useSelector(selectLanguage);
    const dispatch = useDispatch();

    return (
        <Container>
            <ModalWrapper>
                <ClosedIconWrapper>
                    <ClosedIcon
                        onClick={() => dispatch(closeModal())}
                        title={descriptions[language].modalClose}
                    />
                </ClosedIconWrapper>
                <Title>{titleModal}</Title>
                <ButtonWrapper>
                    {modalClick}
                    <ConfirmButton
                        onClick={() => {
                            dispatch(closeModal());
                        }}>{descriptions[language].modalRejected}</ConfirmButton>
                </ButtonWrapper>
            </ModalWrapper>
        </Container>
    )
};

export default Modal;