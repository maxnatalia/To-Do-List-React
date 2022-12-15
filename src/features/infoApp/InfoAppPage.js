import { useSelector } from "react-redux";
import Nav from "../../common/Navigation";
import { Main } from "../../common/Main";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Footer from "../../common/Footer";
import { StyledLink } from "./styled";
import { selectLanguage } from "../../common/language/languageSlice";
import descriptions from "../../common/language/descriptions";

const InfoAppPage = () => {
    const language = useSelector(selectLanguage);

    return (
        <>
            <Nav />
            <Main>
                <Header title={descriptions[language].titleInfoApp} />
                <Section
                    title={descriptions[language].sectionTitleInfoApp}
                    body={
                        <>
                            <div>
                                {descriptions[language].contentInfoApp}
                                <StyledLink
                                    href="https://maxnatalia.github.io/ToDoList/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Vanilla JavaScript
                                </StyledLink>
                            </div>
                        </>
                    }
                />
            </Main>
            <Footer />
        </>
    )
};

export default InfoAppPage;