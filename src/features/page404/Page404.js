import Nav from "../../common/Navigation";
import { Main } from "../../common/Main";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { StyledLinkTask } from "../tasks/TasksPage/TasksList/styled";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../common/languageSlice";
import descriptions from "../../common/descriptions";

const Page404 = () => {
    const language = useSelector(selectLanguage);

    return (
        <><Nav />
            <Main>
                <Header title={descriptions[language].errorPage} />
                <Section
                    title={descriptions[language].errorPageContent}
                    body={<StyledLinkTask to="/zadania">{descriptions[language].pageLink}</StyledLinkTask>}
                />
            </Main>
        </>
    )
};

export default Page404;