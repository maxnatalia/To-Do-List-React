import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Main } from "../../../common/Main";
import ExtraButton from "../ExtraButton";
import Search from "./Search";
import Nav from "../../../common/Navigation";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../common/languageSlice";
import descriptions from "../../../common/descriptions";
import Footer from "../../../common/Footer";
import { useEffect } from "react";

function TasksPage() {

    const language = useSelector(selectLanguage);

    useEffect(() => {
        document.title = descriptions[language].headerTitle;
    });

    return (
        <>
            <Nav />
            <Main>
                <Header title={descriptions[language].headerTitle} />
                <Section
                    title={descriptions[language].sectionTitle}
                    extraContent={<ExtraButton />}
                    body={<Form />}
                />
                <Section
                    title={descriptions[language].searchSectionTitle}
                    body={<Search />}
                />
                <Section
                    title={descriptions[language].tasksSectionTitle}
                    body={<TasksList />}
                    extraContent={<Buttons />}
                />
            </Main>
            <Footer />
        </>
    );
};

export default TasksPage;
