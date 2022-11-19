import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Page404 from "./features/page404/Page404";
import { selectDarkTheme } from "./common/themeSlice";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "../src/theme";
import { GlobalStyle } from "./GlobalStyle";
import InfoAppPage from "./features/infoApp/InfoAppPage";

const App = () => {
    const isDarkTheme = useSelector(selectDarkTheme);
    
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
            <GlobalStyle />
            <HashRouter>
                <Redirect to="/zadania">Zadania</Redirect>
                <Switch>
                    <Route path="/zadania/:id">
                        <TaskPage />
                    </Route>
                    <Route path="/zadania">
                        <TasksPage />
                    </Route>
                    <Route path="/autor">
                        <AuthorPage />
                    </Route>
                    <Route path="/info">
                        <InfoAppPage />
                    </Route>
                    <Route path="/">
                        <Page404 />
                    </Route>
                </Switch>
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;