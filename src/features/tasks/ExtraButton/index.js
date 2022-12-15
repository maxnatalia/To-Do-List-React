import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "../../tasks/TasksPage/Buttons/styled";
import { fetchExampleTasks, selectIsLoading } from "../../tasks/tasksSlice";
import { selectLanguage } from "../../../common/language/languageSlice";
import descriptions from "../../../common/language/descriptions";

const ExtraButton = () => {
    const language = useSelector(selectLanguage);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    return (
        <Container>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={isLoading}
            >
                {isLoading ? descriptions[language].getExampleTasksLoader : descriptions[language].getExampleTaskButton}
            </Button>
        </Container>
    )
};

export default ExtraButton;