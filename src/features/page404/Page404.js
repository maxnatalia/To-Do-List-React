import Nav from "../../common/Navigation";
import { Main } from "../../common/Main";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { StyledLinkTask } from "../tasks/TasksPage/TasksList/styled";

const Page404 = () => {
    return (
        <><Nav />
            <Main>
                <Header title="Błąd 404 - nie znaleziono strony" />
                <Section
                    title="Strona o podanym adresie nie istnieje😒"
                    body={<StyledLinkTask to="/zadania">Powrót do Strony Głównej</StyledLinkTask>}
                />
            </Main>
        </>
    )
};

export default Page404;