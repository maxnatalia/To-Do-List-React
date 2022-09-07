import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "../Buttons/styled";
import { fetchExampleTasks, selectIsLoading } from "../tasksSlice";

const ExtraButton = () => {

    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    return (
        <Container>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={isLoading}
            >
                {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>
        </Container>
    )
};

export default ExtraButton;