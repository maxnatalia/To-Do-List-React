import Nav from "../../common/Navigation";
import { Main } from "../../common/Main";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Footer from "../../common/Footer";
import { toolsData } from "./toolsData";
import { ContainerTools, ToolWrapper, ToolList, ToolItem, ToolIcon } from "./styled";
import react from "./react-90.svg";

const InfoAppPage = () => {
    // const language = useSelector(selectLanguage);

    return (
        <>
            <Nav />
            <Main>
                <Header title="O aplikacji" />
                <Section
                    title="Więcej informacji nt aplikacji"
                    body={
                        <>
                            <div>
                                First project was simple and includes HTML, CSS and JavaScript. You can spot it 👉 here
                                This is more extended version. It contains more advanced techniques learned by months of study and practise. 🚀
                                Below are Open Source libraries used to make Tasks List application and its short info:
                            </div>
                            <ContainerTools>
                                {toolsData.map((el, index) => (
                                    <ToolWrapper>
                                        <ToolList key={index}>
                                            {el.name}
                                            <ToolIcon src={el.img} alt={el.alt} />
                                            {el.tools.map((tool, index) => (
                                                <ToolItem key={index}>{tool}</ToolItem>
                                            ))}
                                        </ToolList>
                                    </ToolWrapper>
                                ))}
                            </ContainerTools>
                            <div><img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white" alt='' /></div>
                        </>
                    } />


            </Main>
            <Footer />
        </>
    )
};

export default InfoAppPage;