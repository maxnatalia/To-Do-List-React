import Section from "../../common/Section";
import Header from "../../common/Header";
import Nav from "../../common/Navigation";
import { Main } from "../../common/Main";
import descriptions from "../../common/descriptions";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../common/languageSlice";
import Footer from "../../common/Footer";

const AuthorPage = () => {
    const language = useSelector(selectLanguage);

    return (
        <>
            <Nav />
            <Main>
                <Header title={descriptions[language].authorPageTitle} />
                <Section
                    title="Natalia Mazur-Żurek"
                    body=
                    {descriptions[language].authorPageContent}
                />
            </Main>
            <Footer />
        </>
    )
};

export default AuthorPage;