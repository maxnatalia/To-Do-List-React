import { useDispatch } from "react-redux";
import { Container, Button } from "../Buttons/styled";
import { fetchExampleTasks } from "../tasksSlice";

const ExtraButton = () => {

    const dispatch = useDispatch();
    
    return (
        <Container>
            <Button onClick={() => dispatch(fetchExampleTasks())}>Pobierz przykładowe zadania</Button>
        </Container>
    )
};

export default ExtraButton;