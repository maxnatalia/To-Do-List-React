import { useDispatch, useSelector } from "react-redux";
import { Container, Title, ButtonWrapper, ModalWrapper, ClosedIcon, ClosedIconWrapper, ConfirmButton } from "./styled";
import { closeModal } from "./modalSlice";
import { selectLanguage } from "../../../../common/language/languageSlice";
import descriptions from "../../../../common/language/descriptions";

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